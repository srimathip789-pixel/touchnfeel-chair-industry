import { Metadata } from "next";
import Link from "next/link";
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  MessageSquare, 
  Settings, 
  FileText,
  LogOut
} from "lucide-react";

export const metadata: Metadata = {
  title: "Admin Dashboard | Touch N Feel",
};

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-secondary/30 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-background border-r hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b">
          <span className="font-bold tracking-tighter">ADMIN PORTAL</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          <Link href="#" className="flex items-center gap-3 px-3 py-2 bg-primary text-primary-foreground rounded-md font-medium">
            <LayoutDashboard className="h-4 w-4" /> Dashboard
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-secondary rounded-md font-medium transition-colors">
            <Package className="h-4 w-4" /> Products
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-secondary rounded-md font-medium transition-colors">
            <FileText className="h-4 w-4" /> Quotes & Orders
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-secondary rounded-md font-medium transition-colors">
            <Users className="h-4 w-4" /> Customers
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-secondary rounded-md font-medium transition-colors">
            <MessageSquare className="h-4 w-4" /> Enquiries
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-secondary rounded-md font-medium transition-colors">
            <Settings className="h-4 w-4" /> Settings
          </Link>
        </nav>
        
        <div className="p-4 border-t">
          <button className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-secondary rounded-md font-medium transition-colors w-full text-left">
            <LogOut className="h-4 w-4" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="h-16 bg-background border-b flex items-center justify-between px-6">
          <h1 className="font-semibold text-lg">Dashboard Overview</h1>
          <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">
            AD
          </div>
        </header>
        
        <div className="p-6 flex-1 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              { title: "Total Products", value: "124", label: "+12 this month" },
              { title: "Pending Quotes", value: "18", label: "4 requires immediate attention" },
              { title: "Total Enquiries", value: "452", label: "+8% from last month" },
              { title: "Active Dealers", value: "32", label: "Across 12 cities" }
            ].map((stat, i) => (
              <div key={i} className="bg-background p-6 rounded-xl border shadow-sm space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">{stat.title}</h3>
                <div className="text-3xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-background rounded-xl border shadow-sm overflow-hidden flex flex-col items-center justify-center py-20 text-center">
            <LayoutDashboard className="h-12 w-12 text-muted-foreground mb-4 opacity-50" />
            <h2 className="text-xl font-bold mb-2">Admin Dashboard Interface</h2>
            <p className="text-muted-foreground max-w-md">
              This is a placeholder for the fully functional admin dashboard where you can manage products, quotes, and customers. It will be connected to a real database in the next iteration.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
