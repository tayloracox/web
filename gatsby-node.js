exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    if (
      page.path.match(/^\/(academy\/(apply|refer)|volunteer)/) ||
      page.path.match(/^\/(community\/joint-training)/)
    ) {
      page.layout = 'formEmbed'
      createPage(page)
    }
    resolve()
  })
}
