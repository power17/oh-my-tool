export const usePermissionRoutes = () => {
  const getRoutesFromMoudules = () => {
    const modules = import.meta.glob('../modules/**/*.tsx');
  };
  return getRoutesFromMoudules;
};
