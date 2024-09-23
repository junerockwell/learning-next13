import Link from "next/link";

async function fetchGitHubUsers() {
  const res = await fetch("https://api.github.com/search/users?q=june");
  const json = await res.json();
  return json;
}

export default async function GitHubUsersPage() {
  console.log("hellox"); // Logs in the terminal, not in the Inspect because it's server-side
  const users = await fetchGitHubUsers();
  console.log("users: ", users);
  const userList = users.items || [];
  return (
    <div>
      <h1>GitHub Users Page</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              {/* <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th> */}
              <th>Name</th>
              <th>URL</th>
              <th>Repos</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user.id}>
                <td>
                  <div className="flex items-cener gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user.avatar_url} alt={user.login} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.login}</div>
                      <div className="text-sm opacity-50">{user.id}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <Link href={user.html_url} className="btn btn-link">
                    View on GitHub
                  </Link>
                </td>
                <th>Go to Repos</th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
