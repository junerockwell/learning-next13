async function fetchRepos(user) {
  const res = await fetch(`https://api.github.com/users/${user}/repos`);
  const json = await res.json();
  return json;
}

export default async function Repos({ user }) {
  const repos = await fetchRepos(user);
  console.log("repos: ", repos);
  return (
    <div className="w-full">
      <h1 className="text-4xl font-poppins font-bold">{user}'s Repos</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Repo Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {repos.map((repo) => (
              <tr key={repo.id}>
                <td>{repo.name}</td>
                <td>{repo.description}</td>
              </tr>
            ))}

            {/* row 3 */}
            {/* <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
