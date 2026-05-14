import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  Link,
} from "@tanstack/react-router";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-deep px-4 text-primary-foreground">
      <div className="max-w-md text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-primary-glow">404</p>
        <h1 className="mt-3 text-5xl font-semibold">Off route</h1>
        <p className="mt-3 text-white/75">This shipment took a wrong turn. Let's get you back on the highway.</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur border border-white/20 hover:bg-white/20 transition"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong on our end. Try again or head home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Try again
          </button>
          <a href="/" className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
