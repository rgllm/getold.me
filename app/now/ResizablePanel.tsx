export default function ResizablePanel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative flex w-full justify-center">{children}</div>
    </div>
  );
}
