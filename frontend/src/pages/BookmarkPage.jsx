import useAuthStore from "../store/useAuthStore";

export const BookmarkPage = () => {
  const { user, bookmarks, toggleBookmark } = useAuthStore();

  return (
    <div>
      유저
      <div>{user?.nickname}</div>
    </div>
  );
};

export default BookmarkPage;
