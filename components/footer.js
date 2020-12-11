import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4">
            "On the Bubble" is run by a couple of guys in their spare time.
          </h3>
          <span className="flex flex-col lg:flex-row justify-between w-1/2 items-center mt-8">
            <h4 className="text-sm m-1">© 2020 On The Bubble</h4>
            <h4 className="text-sm m-1">Built by <a className="hover:underline" href="http://jlamoreaux.com">JLamoreaux</a></h4>
          </span>
        </div>
      </Container>
    </footer>
  );
}
