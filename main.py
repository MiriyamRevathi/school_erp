#!/usr/bin/env python3
"""
Greenfield International School ERP - System Process Runner & Health Manager
Provides orchestration, multi-tenant diagnostics, and database seeder management.
"""

import os
import sys
import subprocess
import time
import urllib.request
import json

def check_service(url, name):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'SchoolERP-Monitor/2.0'})
        with urllib.request.urlopen(req, timeout=5) as response:
            if response.status in (200, 304):
                print(f"[OK] {name} is reachable at {url} (Status: {response.status})")
                return True
    except Exception as e:
        print(f"[WAIT] {name} at {url} is not yet ready: {e}")
        return False

def main():
    print("=" * 65)
    print("  GREENFIELD INTERNATIONAL SCHOOL ERP - RUNNER & DIAGNOSTICS")
    print("=" * 65)

    base_dir = os.path.dirname(os.path.abspath(__file__))
    backend_dir = os.path.join(base_dir, "backend")
    frontend_dir = os.path.join(base_dir, "frontend")

    print(f"Base Directory: {base_dir}")
    print(f"Backend Directory: {backend_dir}")
    print(f"Frontend Directory: {frontend_dir}")

    # Check node modules
    b_mod = os.path.exists(os.path.join(backend_dir, "node_modules"))
    f_mod = os.path.exists(os.path.join(frontend_dir, "node_modules"))
    print(f"Backend Node Modules: {'Found' if b_mod else 'Missing'}")
    print(f"Frontend Node Modules: {'Found' if f_mod else 'Missing'}")

    if len(sys.argv) > 1 and sys.argv[1] == "health":
        print("\nChecking service endpoints...")
        b_ok = check_service("http://localhost:3900/api/info", "NestJS Backend API")
        f_ok = check_service("http://localhost:3000", "Next.js Frontend")
        if b_ok and f_ok:
            print("\nAll systems operational.")
            sys.exit(0)
        else:
            print("\nSome services are offline.")
            sys.exit(1)

    print("\nStarting School ERP platform services...")
    try:
        if os.name == 'nt':
            cmd = "npm run start"
        else:
            cmd = "npm run start"
        subprocess.run(cmd, shell=True, cwd=base_dir)
    except KeyboardInterrupt:
        print("\nShutting down services gracefully.")

if __name__ == "__main__":
    main()
