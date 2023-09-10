export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      {children}
    </div>
  );
}
