'use server'
import { PostData, UserData } from "../../../types";
 
export const fetchUsers = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) throw new Error('Failed to fetch users data');
  return res.json();
};

export const fetchUserDetails = async(id: number) => {
  const getUsersRes = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!getUsersRes.ok) throw new Error('Failed to fetch users data');
  const getUsersResData = await getUsersRes.json();
  const userDetails = getUsersResData.filter((user: UserData) => user.id === id)[0];
  
  if(!userDetails) return;
  
  const getPostsRes = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!getPostsRes.ok) throw new Error('Failed to fetch posts data');
  const getPostsResData = await getPostsRes.json();
  const posts = getPostsResData.filter((post: PostData) => post.userId === id);

  return {
    ...userDetails,
    posts
  };
};