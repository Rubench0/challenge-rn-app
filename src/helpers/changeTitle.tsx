export const changeTitle = (title: string) => {
  const tituloArray = title.split(' ');

  const newTitulo =
    tituloArray[tituloArray.length - 1] +
    ' ' +
    tituloArray[tituloArray.length - 2];

  return newTitulo;
};
