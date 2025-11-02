import React from 'react'

const ClientLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
        <p>client layout</p>
        {children}</div>
  )
}

export default ClientLayout