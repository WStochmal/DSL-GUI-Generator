export const testApp = {
  id: "test",
  name: "Praca magisterska",
  description: "Project Description",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  authorId: "123897231634 643",
  authorName: "Wojciech Stochmal",
  authorAvatar:
    "https://cdn.pixabay.com/photo/2017/12/16/06/41/avatar-3022215_960_720.jpg", // example
  files: [
    {
      id: "fileId1",
      name: "File 1",
      type: "file",
      content: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "folderId1",
      name: "Folder 1",
      type: "folder",
      content: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ],
};
