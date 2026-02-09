import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen bg-[#00030D] flex items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-6xl font-bold text-white tracking-tight">
          404
        </h1>
        <p className="mt-4 text-xl text-white/80">
          Page not found
        </p>
        <p className="mt-3 text-white/60">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/"
            className="
              rounded-xl
              bg-white
              px-6 py-3
              text-sm font-medium text-black
              transition
              hover:bg-white/90
            "
          >
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="
              rounded-xl
              border border-white/20
              px-6 py-3
              text-sm text-white
              transition
              hover:bg-white/10
            "
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
