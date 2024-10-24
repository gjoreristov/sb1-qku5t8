"use client";

import ComputerForm from '@/components/ComputerForm';
import ComputerList from '@/components/ComputerList';
import { useComputers } from '@/hooks/useComputers';
import { Cpu } from 'lucide-react';

export default function Home() {
  const { computers, addComputer, searchQuery, setSearchQuery } = useComputers();

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-8 space-x-3">
          <Cpu className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-center">Computer Inventory System</h1>
        </div>
        
        <div className="grid gap-8 md:grid-cols-[400px,1fr]">
          <div className="bg-background rounded-lg border shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Add New Computer</h2>
            <ComputerForm onSubmit={addComputer} />
          </div>
          
          <div className="bg-background rounded-lg border shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Computer List</h2>
            <ComputerList 
              computers={computers}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          </div>
        </div>
      </div>
    </main>
  );
}