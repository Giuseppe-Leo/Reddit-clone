async function fetchTopPosts(subreddit){

    try{
        const response = await fetch(`https://www.reddit.com/r/${subreddit}/top.json`);
        const data = await response.json();
        return data;
    }catch (error){
        console.error('Error fetching data:', error);
        throw error;
    }
}


export {fetchTopPosts};