import Header from '../molecules/header/header';

interface Props {
  children: React.ReactNode;
}

export default function GeneralPageLayout(props: Props) {
  const { children } = props;

  return (
    <>
      <Header />
      <main>
        <section>{children}</section>
      </main>
    </>
  );
}
