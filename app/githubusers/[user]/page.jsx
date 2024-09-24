import Repos from "@/app/components/Repos";
export default function UserReposPage({ params: { user } }) {
  return (
    <div className="max-w-full font-sans">
      <Repos user={user} />
    </div>
  );
}
