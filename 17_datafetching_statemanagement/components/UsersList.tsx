"use client";

import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type User = {
    id: number;
    name: string;
    email: string;
};

function UsersList() {
    const {
        data: users,
        isLoading,
        isError,
        error,
    } = useQuery<User[]>({
        queryKey: ["users"],
        queryFn: async () => {
            const response = await fetch("/api/users");
            if (!response.ok) {
                throw new Error("Failed to fetch users");
            }
            return response.json();
        },
    });

    if (isLoading) {
        return <p>Loading users...</p>;
    }

    if (isError) {
        return <p className="text-red-500">Error: {(error as Error).message}</p>;
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Users List (useQuery Example)</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    {users?.map((user) => (
                        <div
                            key={user.id}
                            className="flex items-center justify-between p-2 border rounded"
                        >
                            <div>
                                <div className="font-medium">{user.name}</div>
                                <div className="text-sm text-muted-foreground">
                                    {user.email}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

export default UsersList;
