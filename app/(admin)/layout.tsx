import React from 'react'

const AdminLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            <p>admin layout</p>
            {children}</div>
    )
}

export default AdminLayout