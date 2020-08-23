let org = "devscollab";
let repo = "sandbox";

const ListContributors = async () => {
  let avatar, name, githubprofile, contributions;
  api = `https://api.github.com/repos/${org}/${repo}/contributors?q=contributions&order=desc`;

  const data = await fetch(api);

  const json = await data.json();
  const main = document.getElementById("contributors");
  json.forEach((e) => {
    avatar = e.avatar_url;
    githubprofile = e.html_url;
    name = e.login;
    contributions = e.contributions;

    let userProfiles = document.createElement("div");
    userProfiles.innerHTML = `
        
      <div>
      
      <a href="${githubprofile}" >
      <img
        class="align-self-center contriimg"
        src="${avatar}"
        alt="User Img"
      /> 
      </a>
      <h5 class="mt-0 contributor">${name}</h5>
      <h5 class="mt-0 contributor">Contributions :${contributions}</h5>

    </div>
      `;

    console.log(userProfiles);
    main.appendChild(userProfiles);
  });
};

ListContributors();
