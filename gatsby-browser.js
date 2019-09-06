let offsetY = 0;

const getTargetOffset = hash => {
  const id = window.decodeURI(hash.replace(`#`, ``));
  if (id !== ``) {
    const element = document.getElementById(id);
    if (element) {
      return element.offsetTop - offsetY;
    }
  }
  return null;
};

exports.onInitialClientRender = (_, pluginOptions) => {
  if (pluginOptions.offsetY) {
    offsetY = pluginOptions.offsetY;
  }
  if (pluginOptions.scrollToOptions) {
    scrollToOptions = pluginOptions.scrollToOptions;
  }

  requestAnimationFrame(() => {
    const offset = getTargetOffset(window.location.hash);
    if (offset !== null) {
      scrollToOptions
        ? window.scrollTo({ ...scrollToOptions, top: offset })
        : window.scrollTo(0, offset);
    }
  });
};

exports.shouldUpdateScroll = ({ routerProps: { location } }) => {
  const offset = getTargetOffset(location.hash);
  return offset !== null ? [0, offset] : true;
};
