'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BrainCircuit, Binary, TreePine, Box, List,
  ArrowLeftRight, Calculator, MessageSquare, Hash, ArrowRightLeft, Home
} from "lucide-react"
import Link from "next/link"

const sections = {
  dataStructures: [
    {
      name: "Linked List",
      description: "Dynamic nodes connected through references. Explore singly, doubly, and circular lists.",
      href: "/visualizer/linked-list",
      icon: List,
    },
    {
      name: "Stack",
      description: "LIFO structure. Push and pop in real-time.",
      href: "/visualizer/stack",
      icon: ArrowLeftRight,
    },
    {
      name: "Queue",
      description: "FIFO structure. Enqueue and dequeue operations visualized.",
      href: "/visualizer/queue",
      icon: ArrowLeftRight,
    },
    {
      name: "Binary Search Tree",
      description: "Sorted binary structure with log-time operations.",
      href: "/visualizer/binary-tree",
      icon: Binary,
    },
    {
      name: "AVL Tree",
      description: "Self-balancing BST with rotations.",
      href: "/visualizer/avl-tree",
      icon: TreePine,
    },
    {
      name: "Heap",
      description: "Min/Max binary heaps with dynamic updates.",
      href: "/visualizer/heap",
      icon: Box,
    },
  ],
  applications: [
    {
      name: "Infix to Postfix",
      description: "Convert infix expressions to postfix using stack.",
      href: "/visualizer/stack-applications",
      icon: Calculator,
    },
    {
      name: "Message Queue",
      description: "Simulate producer-consumer patterns.",
      href: "/visualizer/queue-applications",
      icon: MessageSquare,
    },
    {
      name: "Polynomial Multiplication",
      description: "Step-by-step linked list multiplication.",
      href: "/visualizer/polynomial",
      icon: Calculator,
    },
    {
      name: "Huffman Coding",
      description: "Visualize frequency-based compression coding.",
      href: "/visualizer/huffman",
      icon: Hash,
    },
    {
      name: "Dijkstra's Algorithm",
      description: "Shortest path algorithm in weighted graphs.",
      href: "/visualizer/dijkstra",
      icon: ArrowRightLeft,
    },
  ]
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-white">

      {/* 🔷 Top Navbar */}
      <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-cyan-600 to-blue-600 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center text-white gap-2">
          <Home className="w-6 h-6" />
          <span className="text-lg font-semibold">Home</span>
        </div>
      </header>

      {/* 🔷 Main Content */}
      <main className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex justify-center items-center gap-4 mb-4">
            <BrainCircuit className="h-10 w-10 text-blue-700" />
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">Data Structure Visualizer</h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Interactive, animated tools to learn core data structures and algorithms step-by-step.
          </p>
        </div>

        {/* 🔶 Sections */}
        <div className="space-y-20">

          {/* 🔶 Core Data Structures */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-8">📦 Core Data Structures</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.dataStructures.map(({ name, description, href, icon: Icon }) => (
                <Link href={href} key={href}>
                  <Card className="h-full border border-gray-200 bg-white/70 backdrop-blur-md shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Icon className="w-6 h-6 text-cyan-600" />
                        <CardTitle className="text-lg text-gray-900">{name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-700">{description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* 🔶 Algorithm Applications */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-8">🧠 Algorithm Applications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.applications.map(({ name, description, href, icon: Icon }) => (
                <Link href={href} key={href}>
                  <Card className="h-full border border-gray-200 bg-white/70 backdrop-blur-md shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Icon className="w-6 h-6 text-green-600" />
                        <CardTitle className="text-lg text-gray-900">{name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-700">{description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}
