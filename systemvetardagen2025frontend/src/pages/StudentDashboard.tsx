import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Copy, Download, Search, Loader2, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

// Types
interface Student {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  degree: string;
  fieldOfStudy: string;
  createdAt?: string;
}

interface DashboardState {
  students: Student[];
  isLoading: boolean;
  error: string | null;
  searchTerm: string;
  sortField: keyof Student | null;
  sortDirection: 'asc' | 'desc';
}

const StudentDashboard: React.FC = () => {
  const [state, setState] = useState<DashboardState>({
    students: [],
    isLoading: false,
    error: null,
    searchTerm: '',
    sortField: null,
    sortDirection: 'asc'
  });

  const handleSort = (field: keyof Student) => {
    setState(prev => ({
      ...prev,
      sortField: field,
      sortDirection: 
        prev.sortField === field && prev.sortDirection === 'asc' 
          ? 'desc' 
          : 'asc'
    }));
  };

  const handleSearch = (value: string) => {
    setState(prev => ({
      ...prev,
      searchTerm: value
    }));
  };

  const copyEmails = async () => {
    const emails = state.students.map(student => student.email).join(', ');
    try {
      await navigator.clipboard.writeText(emails);
    } catch (err) {
      setState(prev => ({
        ...prev,
        error: 'Failed to copy emails to clipboard'
      }));
    }
  };

  const exportCSV = () => {
    try {
      const headers = ['First Name', 'Last Name', 'Email', 'Degree', 'Field of Study'];
      const csvData = state.students.map(student => 
        [student.firstName, student.lastName, student.email, student.degree, student.fieldOfStudy].join(',')
      );
      const csv = [headers.join(','), ...csvData].join('\n');
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'systemvetardagen-signups.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setState(prev => ({
        ...prev,
        error: 'Failed to export CSV'
      }));
    }
  };

  const filteredStudents = state.students.filter(student => 
    Object.values(student)
      .join(' ')
      .toLowerCase()
      .includes(state.searchTerm.toLowerCase())
  );

  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (!state.sortField) return 0;
    
    const aValue = a[state.sortField];
    const bValue = b[state.sortField];
    
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return state.sortDirection === 'asc' 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    return 0;
  });

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex flex-col items-center pt-8 px-4">
      <div className="w-full max-w-6xl text-center mb-8">
        <h1 className="text-white text-4xl font-bold mb-4">Systemvetardagen 2025</h1>
        <h2 className="text-white text-xl">Marketing Dashboard</h2>
      </div>

      <Card className="w-full max-w-6xl">
        <CardHeader>
          <CardTitle className="flex justify-between items-center flex-wrap gap-4">
            <span>Student Signups</span>
            <div className="flex gap-4">
              <button
                onClick={copyEmails}
                disabled={state.isLoading || state.students.length === 0}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors disabled:bg-purple-400"
              >
                <Copy size={16} /> Copy All Emails
              </button>
              <button
                onClick={exportCSV}
                disabled={state.isLoading || state.students.length === 0}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors disabled:bg-purple-400"
              >
                <Download size={16} /> Export CSV
              </button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {state.error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{state.error}</AlertDescription>
            </Alert>
          )}

          <div className="mb-6 relative">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search students..."
              className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-100"
              value={state.searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              disabled={state.isLoading}
            />
          </div>

          {state.isLoading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="animate-spin text-purple-600" size={48} />
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th 
                        className="px-4 py-2 text-left cursor-pointer hover:bg-gray-50"
                        onClick={() => handleSort('firstName')}
                      >
                        Name
                      </th>
                      <th 
                        className="px-4 py-2 text-left cursor-pointer hover:bg-gray-50"
                        onClick={() => handleSort('email')}
                      >
                        Email
                      </th>
                      <th 
                        className="px-4 py-2 text-left cursor-pointer hover:bg-gray-50"
                        onClick={() => handleSort('degree')}
                      >
                        Degree
                      </th>
                      <th 
                        className="px-4 py-2 text-left cursor-pointer hover:bg-gray-50"
                        onClick={() => handleSort('fieldOfStudy')}
                      >
                        Field of Study
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedStudents.map((student) => (
                      <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-4 py-3">{`${student.firstName} ${student.lastName}`}</td>
                        <td className="px-4 py-3">{student.email}</td>
                        <td className="px-4 py-3 capitalize">{student.degree}</td>
                        <td className="px-4 py-3">{student.fieldOfStudy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {sortedStudents.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  No students found
                </div>
              ) : (
                <div className="mt-4 text-sm text-gray-600">
                  Total Signups: {sortedStudents.length}
                </div>
              )}
            </>
          )}
        </CardContent>
      </Card>

      <div className="mt-8 text-center text-white text-sm">
        <p>Systemvetardagen is organized by the Student Union DISK</p>
        <p>at the Department of Computer and Systems Sciences at Stockholm University</p>
      </div>
    </div>
  );
};

export default StudentDashboard;
