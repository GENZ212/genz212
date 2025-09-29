"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { usePathname } from "next/navigation"

export function Navigation() {
  const { data: session, status } = useSession()
  const pathname = usePathname()

  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - CNN Style */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white leading-none">GenZ212</span>
                <span className="text-xs text-red-400 font-semibold tracking-wider">MOROCCO NEWS</span>
              </div>
            </div>
          </Link>

          {/* Breaking News Ticker */}
          <div className="hidden lg:flex items-center bg-red-600 px-3 py-1 rounded">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></div>
            <span className="text-xs font-semibold text-white tracking-wide">
              LIVE: Protests Continue Nationwide
            </span>
          </div>

          {/* Navigation Links - CNN Style */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-1">
              <Link
                href="/"
                className={`px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors border-b-2 ${
                  pathname === '/' 
                    ? 'text-white border-red-600' 
                    : 'text-gray-300 border-transparent hover:text-white hover:border-red-400'
                }`}
              >
                Home
              </Link>
              <Link
                href="/demands"
                className={`px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors border-b-2 ${
                  pathname === '/demands' 
                    ? 'text-white border-red-600' 
                    : 'text-gray-300 border-transparent hover:text-white hover:border-red-400'
                }`}
              >
                Demands
              </Link>
              <Link
                href="/timeline"
                className={`px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors border-b-2 ${
                  pathname === '/timeline' 
                    ? 'text-white border-red-600' 
                    : 'text-gray-300 border-transparent hover:text-white hover:border-red-400'
                }`}
              >
                Timeline
              </Link>
              <Link
                href="/resources"
                className={`px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors border-b-2 ${
                  pathname === '/resources' 
                    ? 'text-white border-red-600' 
                    : 'text-gray-300 border-transparent hover:text-white hover:border-red-400'
                }`}
              >
                Resources
              </Link>
            </div>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {status === "loading" ? (
              <div className="h-8 w-8 bg-gray-700 rounded-full animate-pulse" />
            ) : session?.user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full hover:bg-gray-800">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={session.user.image || ""} alt={session.user.name || ""} />
                      <AvatarFallback className="bg-red-600 text-white">
                        {session.user.name?.charAt(0) || session.user.email?.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-gray-900 border-gray-700 text-white" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      {session.user.name && (
                        <p className="font-medium text-white">{session.user.name}</p>
                      )}
                      {session.user.email && (
                        <p className="w-[200px] truncate text-sm text-gray-400">
                          {session.user.email}
                        </p>
                      )}
                      {(session.user as any).role && (
                        <Badge variant="secondary" className="w-fit bg-red-600 text-white">
                          {(session.user as any).role}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <DropdownMenuItem asChild className="text-white hover:bg-gray-800">
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  {(session.user as any).role === 'ADMIN' && (
                    <DropdownMenuItem asChild className="text-white hover:bg-gray-800">
                      <Link href="/admin">Admin</Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem
                    className="cursor-pointer text-white hover:bg-gray-800"
                    onSelect={(event) => {
                      event.preventDefault()
                      signOut()
                    }}
                  >
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-3">
                <Button 
                  variant="ghost" 
                  onClick={() => signIn()} 
                  className="text-white hover:bg-gray-800 text-sm font-semibold"
                  size="sm"
                >
                  Sign In
                </Button>
                <Button 
                  onClick={() => signIn()} 
                  variant="default"
                  size="sm"
                  className="font-semibold"
                >
                  Subscribe
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
