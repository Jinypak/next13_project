import React from "react";

export default function RootLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <div className={"h-full"}>{children}</div>;
}
