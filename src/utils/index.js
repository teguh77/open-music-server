const mapDBToSongsModel = ({ id, title, performer }) => ({
  id,
  title,
  performer,
});

module.exports = { mapDBToSongsModel };
