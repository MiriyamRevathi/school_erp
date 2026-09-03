export interface UIState {
  sidebarOpen: boolean;
  theme: 'light' | 'dark' | 'system';
}

export const initialUIState: UIState = {
  sidebarOpen: true,
  theme: 'system',
};
