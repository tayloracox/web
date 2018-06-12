exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    if (page.path.match(/^\/(academy\/(apply|refer)|jr|volunteer)/)) {
      page.layout = 'formEmbed'
      createPage(page)
    }
    resolve()
  })
}
