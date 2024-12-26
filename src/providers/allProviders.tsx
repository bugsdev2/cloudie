import CurrentLocationProvider from './currentLocationProvider';
import CurrentPositionProvider from './currentPositionProvider';

const Providers = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <CurrentLocationProvider>
        <CurrentPositionProvider>{children}</CurrentPositionProvider>
      </CurrentLocationProvider>
    </>
  );
};

export default Providers;
