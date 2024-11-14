export default function filterSensitiveData(data) {
  const { password, salt, ...rest } = data;

  return rest;
}
