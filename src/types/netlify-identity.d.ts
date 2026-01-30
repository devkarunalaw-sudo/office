interface NetlifyIdentityUser {
  email: string;
  user_metadata: Record<string, any>;
  app_metadata: Record<string, any>;
}

interface NetlifyIdentity {
  on(event: string, callback: (user?: NetlifyIdentityUser) => void): void;
  open(tab?: string): void;
  close(): void;
  currentUser(): NetlifyIdentityUser | null;
}

interface Window {
  netlifyIdentity: NetlifyIdentity;
}