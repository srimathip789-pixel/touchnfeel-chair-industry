// Admin layout — suppress the root Navbar/Footer by having its own
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
