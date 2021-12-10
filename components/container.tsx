type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => (
  <div className="h-full max-w-screen-xl px-6 mx-auto ">{children}</div>
);

export default Container;
