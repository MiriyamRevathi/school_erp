"use client";

import * as React from "react";
import { api } from "~/lib/api";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { Library, BookOpen, Plus, RefreshCw, AlertCircle, Search, ArrowLeftRight, CheckCircle2, X } from "lucide-react";

export interface Book {
  id: string;
  isbn: string;
  title: string;
  author: string;
  category: string;
  publisher: string;
  totalCopies: number;
  availableCopies: number;
  shelfLocation: string;
}

export interface BookIssue {
  id: string;
  bookId: string;
  bookTitle: string;
  studentId: string;
  studentName: string;
  issueDate: string;
  dueDate: string;
  returnDate?: string;
  status: "Issued" | "Returned" | "Overdue";
  fineAmount: number;
}

export function LibraryView() {
  const [activeTab, setActiveTab] = React.useState<"books" | "issues">("books");
  const [books, setBooks] = React.useState<Book[]>([]);
  const [issues, setIssues] = React.useState<BookIssue[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [search, setSearch] = React.useState("");

  const [showIssueModal, setShowIssueModal] = React.useState(false);
  const [selectedBook, setSelectedBook] = React.useState<Book | null>(null);
  const [studentName, setStudentName] = React.useState("Liam Davis");
  const [studentId, setStudentId] = React.useState("stu-1");

  const loadData = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [bookList, issueList] = await Promise.all([
        api.get<Book[]>("/library/books"),
        api.get<BookIssue[]>("/library/issues"),
      ]);
      setBooks(Array.isArray(bookList) ? bookList : []);
      setIssues(Array.isArray(issueList) ? issueList : []);
    } catch (err: any) {
      setError(err.message || "Failed to load library catalog");
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    loadData();
  }, [loadData]);

  const handleIssueBook = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBook) return;
    try {
      await api.post("/library/issues", {
        bookId: selectedBook.id,
        studentId,
        studentName,
      });
      setShowIssueModal(false);
      loadData();
    } catch (err: any) {
      alert(err.message || "Failed to issue book");
    }
  };

  const handleReturnBook = async (issueId: string) => {
    try {
      await api.put(`/library/issues/${issueId}/return`);
      loadData();
    } catch (err: any) {
      alert(err.message || "Failed to return book");
    }
  };

  const filteredBooks = books.filter((b) =>
    `${b.title} ${b.author} ${b.isbn} ${b.category}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Library Resource Center</h1>
          <p className="text-sm text-muted-foreground">
            Manage physical and digital catalog, student book loans, and returns
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={loadData} disabled={loading}>
            <RefreshCw className={`mr-2 size-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 rounded-lg bg-destructive/15 p-4 text-sm text-destructive">
          <AlertCircle className="size-5 shrink-0" />
          <p>{error}</p>
        </div>
      )}

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b pb-2">
        <Button
          variant={activeTab === "books" ? "default" : "ghost"}
          size="sm"
          onClick={() => setActiveTab("books")}
        >
          <BookOpen className="mr-2 size-4" /> Book Catalog ({books.length})
        </Button>
        <Button
          variant={activeTab === "issues" ? "default" : "ghost"}
          size="sm"
          onClick={() => setActiveTab("issues")}
        >
          <ArrowLeftRight className="mr-2 size-4" /> Active Loans & Returns ({issues.length})
        </Button>
      </div>

      {activeTab === "books" && (
        <>
          <Card>
            <CardContent className="pt-6">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
                <Input
                  placeholder="Search books by title, author, ISBN, category..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9"
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {loading ? (
              <div className="col-span-full py-12 text-center text-muted-foreground">
                <RefreshCw className="size-6 animate-spin mx-auto text-primary mb-2" />
                <p className="text-sm">Loading books...</p>
              </div>
            ) : filteredBooks.length === 0 ? (
              <div className="col-span-full py-12 text-center text-muted-foreground">
                <Library className="size-8 mx-auto text-muted-foreground/50 mb-2" />
                <p className="font-medium text-foreground">No books matched search</p>
              </div>
            ) : (
              filteredBooks.map((b) => (
                <Card key={b.id} className="flex flex-col justify-between">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <Badge variant="outline" className="text-[10px] mb-1 font-mono">
                          {b.shelfLocation}
                        </Badge>
                        <CardTitle className="text-base font-bold line-clamp-1">{b.title}</CardTitle>
                        <CardDescription>{b.author}</CardDescription>
                      </div>
                      <Badge variant={b.availableCopies > 0 ? "default" : "secondary"}>
                        {b.availableCopies} Left
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 text-xs">
                    <div className="flex justify-between text-muted-foreground pt-2 border-t">
                      <span>Category: {b.category}</span>
                      <span className="font-mono">{b.isbn}</span>
                    </div>

                    <div className="pt-2 flex justify-end">
                      <Button
                        size="xs"
                        disabled={b.availableCopies <= 0}
                        onClick={() => {
                          setSelectedBook(b);
                          setShowIssueModal(true);
                        }}
                      >
                        <ArrowLeftRight className="mr-1 size-3.5" /> Issue to Student
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </>
      )}

      {activeTab === "issues" && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Loan Register</CardTitle>
            <CardDescription>Records of issued and returned volumes</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="py-12 text-center text-muted-foreground">
                <RefreshCw className="size-6 animate-spin mx-auto text-primary" />
              </div>
            ) : issues.length === 0 ? (
              <p className="py-8 text-center text-xs text-muted-foreground">No active loan records</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="border-b bg-muted/50 text-xs font-medium text-muted-foreground uppercase">
                    <tr>
                      <th className="px-4 py-3">Book Title</th>
                      <th className="px-4 py-3">Borrower</th>
                      <th className="px-4 py-3">Issued Date</th>
                      <th className="px-4 py-3">Due Date</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {issues.map((iss) => (
                      <tr key={iss.id} className="hover:bg-muted/30">
                        <td className="px-4 py-3 font-medium text-foreground">{iss.bookTitle}</td>
                        <td className="px-4 py-3 text-xs">{iss.studentName}</td>
                        <td className="px-4 py-3 font-mono text-xs">{iss.issueDate}</td>
                        <td className="px-4 py-3 font-mono text-xs">{iss.dueDate}</td>
                        <td className="px-4 py-3">
                          <Badge variant={iss.status === "Returned" ? "secondary" : "default"}>
                            {iss.status}
                          </Badge>
                        </td>
                        <td className="px-4 py-3 text-right">
                          {iss.status === "Issued" ? (
                            <Button
                              size="xs"
                              variant="outline"
                              onClick={() => handleReturnBook(iss.id)}
                            >
                              Return Book
                            </Button>
                          ) : (
                            <span className="text-xs text-muted-foreground">Returned</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Issue Book Modal */}
      {showIssueModal && selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-xl border bg-background p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h2 className="text-lg font-bold">Issue Book Loan</h2>
              <Button variant="ghost" size="icon-xs" onClick={() => setShowIssueModal(false)}>
                <X className="size-4" />
              </Button>
            </div>

            <div className="rounded-lg bg-muted/40 p-3 text-xs space-y-1">
              <div>
                <span className="text-muted-foreground">Book: </span>
                <span className="font-bold text-foreground">{selectedBook.title}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Author: </span>
                <span>{selectedBook.author}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Shelf: </span>
                <span className="font-mono">{selectedBook.shelfLocation}</span>
              </div>
            </div>

            <form onSubmit={handleIssueBook} className="space-y-4 text-sm">
              <div className="space-y-1">
                <Label>Borrower Student Name</Label>
                <Input
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                />
              </div>

              <div className="space-y-1">
                <Label>Student ID / Admission No</Label>
                <Input
                  required
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                />
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t">
                <Button type="button" variant="outline" onClick={() => setShowIssueModal(false)}>
                  Cancel
                </Button>
                <Button type="submit">Confirm Loan</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
