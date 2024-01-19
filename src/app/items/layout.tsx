import GeneralPageLayout from '@/components/templates/general-page-layout';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GeneralPageLayout>
      <section>{children}</section>
    </GeneralPageLayout>
  );
}
