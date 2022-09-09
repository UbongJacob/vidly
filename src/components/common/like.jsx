const Like = ({ liked, onClick }) => {
  const classes = liked ? 'fa fa-heart' : 'fa fa-heart-o';
  return (
    <i
      className={classes}
      style={{ cursor: 'pointer' }}
      onClick={onClick}
      aria-hidden
    ></i>
  );
};

export default Like;
