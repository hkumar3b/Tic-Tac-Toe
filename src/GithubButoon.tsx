export const GithubButton=()=>{
    const reDirectToGithub=()=>{
        window.location.href="https://github.com/hkumar3b/Tic-Tac-Toe";
    }
    return (
        <button className="github-button" onClick={reDirectToGithub}>
            Github
        </button>
    );
}