import React, { useState, useEffect, useMemo } from 'react';
import { useQuery } from 'react-query';
import { customFetchGetPreSignup } from '../utilities/customFetchGetPreSignUp';
import Login from './Login';
import { user } from '../structure/genstruct';
interface Student {
    Id?: number;
    FirstName: string;
    LastName: string;
    Email: string;
    Degree: string;
    FieldOfStudy: string;
    CreatedAt?: string;
}

const StudentDashboard: React.FC = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loginData, setLoginData] = useState<user>({
        username: '',
        password: '',
    });
    const [loginState, setLoginState] = useState<
        'initial' | 'fail' | 'success'
    >('initial');
    const [sortConfig, setSortConfig] = useState<{
        field: keyof Student | null;
        direction: 'asc' | 'desc';
    }>({ field: null, direction: 'asc' });

    const login = (data: user) => {
        setLoginData(data);
    };

    const { isFetching: signUpsIsFetching } = useQuery({
        enabled:
            loginData.username != '' &&
            loginData.password != '' &&
            students.length === 0,
        queryKey: ['GetSignUps', loginData],
        queryFn: () => customFetchGetPreSignup('GetSignUps', { ...loginData }),
        onSuccess: (data) => {
            if (!data.success) {
                setError('Failed to fetch signups');
                setLoginState('fail');
                localStorage.removeItem('username');
                localStorage.removeItem('password');
                return;
            }
            setLoginState('success');
            setStudents((prev) =>
                JSON.stringify(prev) !== JSON.stringify(data.signups)
                    ? data.signups
                    : prev
            );
            setError(null);
            localStorage.setItem('username', loginData.username);
            localStorage.setItem('password', loginData.password);
        },
    });

    if (loginState !== 'success') {
        return <Login login={login} loginSuccess={loginState} />;
    }
    const handleSort = (field: keyof Student) => {
        setSortConfig({
            field,
            direction:
                sortConfig.field === field && sortConfig.direction === 'asc'
                    ? 'desc'
                    : 'asc',
        });
    };
    const copyEmails = async () => {
        try {
            await navigator.clipboard.writeText(
                students.map((s) => s.Email).join(', ')
            );
        } catch (err) {
            setError('Failed to copy emails');
        }
    };
    const exportCSV = () => {
        try {
            const headers = [
                'First Name',
                'Last Name',
                'Email',
                'Degree',
                'Field of Study',
            ];
            const csvData = students.map((student) =>
                [
                    student.FirstName,
                    student.LastName,
                    student.Email,
                    student.Degree,
                    student.FieldOfStudy,
                ].join(',')
            );
            const csv = [headers.join(','), ...csvData].join('\n');
            const blob = new Blob([csv], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'systemvetardagen-signups.csv';
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (err) {
            setError('Failed to export CSV');
        }
    };

    const filteredAndSortedStudents = [...students]
        .filter((student) =>
            Object.values(student)
                .join(' ')
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (!sortConfig.field) return 0;
            const aVal = a[sortConfig.field];
            const bVal = b[sortConfig.field];
            if (typeof aVal === 'string' && typeof bVal === 'string') {
                return sortConfig.direction === 'asc'
                    ? aVal.localeCompare(bVal)
                    : bVal.localeCompare(aVal);
            }
            return 0;
        });
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex flex-col items-center pt-8 px-4">
            <div className="w-full max-w-6xl text-center mb-8">
                <h1 className="text-white text-4xl font-bold mb-4">
                    Systemvetardagen 2025
                </h1>
                <h2 className="text-white text-xl">Marketing Dashboard</h2>
            </div>

            <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl p-6">
                <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
                    <span id="pagetext" className="text-xl font-semibold">
                        Student Signups
                    </span>
                    <div className="flex gap-4">
                        <button
                            id="pagetext"
                            onClick={copyEmails}
                            disabled={
                                signUpsIsFetching || students.length === 0
                            }
                            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors disabled:bg-purple-400"
                        >
                            Copy All Emails
                        </button>
                        <button
                            id="pagetext"
                            onClick={exportCSV}
                            disabled={
                                signUpsIsFetching || students.length === 0
                            }
                            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors disabled:bg-purple-400"
                        >
                            Export CSV
                        </button>
                    </div>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
                        {error}
                    </div>
                )}

                <div className="mb-6">
                    <input
                        id="pagetext"
                        type="text"
                        placeholder="Search students..."
                        className="w-full px-4 py-2 rounded-md bg-gray-100"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        disabled={signUpsIsFetching}
                    />
                </div>

                {signUpsIsFetching ? (
                    <div className="flex justify-center items-center py-12">
                        Loading...
                    </div>
                ) : (
                    <>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <th
                                            id="pagetext"
                                            className="px-4 py-2 text-left cursor-pointer hover:bg-gray-50"
                                            onClick={() =>
                                                handleSort('FirstName')
                                            }
                                        >
                                            Name
                                        </th>
                                        <th
                                            id="pagetext"
                                            className="px-4 py-2 text-left cursor-pointer hover:bg-gray-50"
                                            onClick={() => handleSort('Email')}
                                        >
                                            Email
                                        </th>
                                        <th
                                            id="pagetext"
                                            className="px-4 py-2 text-left cursor-pointer hover:bg-gray-50"
                                            onClick={() => handleSort('Degree')}
                                        >
                                            Degree
                                        </th>
                                        <th
                                            id="pagetext"
                                            className="px-4 py-2 text-left cursor-pointer hover:bg-gray-50"
                                            onClick={() =>
                                                handleSort('FieldOfStudy')
                                            }
                                        >
                                            Field of Study
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredAndSortedStudents.map(
                                        (student, index) => (
                                            <tr
                                                key={student.Id ?? index}
                                                className={`border-b border-gray-100 hover:bg-blue-200 transition-colors duration-200 ${
                                                    index % 2 !== 0 &&
                                                    'bg-gray-100'
                                                }`}
                                            >
                                                <td className="px-4 py-3">{`${student.FirstName} ${student.LastName}`}</td>
                                                <td className="px-4 py-3">
                                                    {student.Email}
                                                </td>
                                                <td className="px-4 py-3 capitalize">
                                                    {student.Degree}
                                                </td>
                                                <td className="px-4 py-3">
                                                    {student.FieldOfStudy}
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                        </div>
                        {filteredAndSortedStudents.length === 0 ? (
                            <div className="text-center py-8 text-gray-500">
                                No students found
                            </div>
                        ) : (
                            <div
                                id="pagetext"
                                className="mt-4 text-sm text-gray-600"
                            >
                                Total Signups:{' '}
                                {filteredAndSortedStudents.length}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default StudentDashboard;
