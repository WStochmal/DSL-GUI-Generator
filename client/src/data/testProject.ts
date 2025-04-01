const testProjectData = {
  id: "test",
  title: "Praca magisterska",
  color: "#7AC74F",
  description: "Project Description",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  authorId: "123897231634 643",
  authorName: "Wojciech Stochmal",
  authorAvatar:
    "https://cdn.pixabay.com/photo/2017/12/16/06/41/avatar-3022215_960_720.jpg", // example
  files: [
    {
      category: "file", // file or folder?
      id: "fileId1",
      name: "File 1",
      type: "file", //  component or file?
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,\n sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      category: "folder",
      id: "folderId1",
      name: "Components",
      type: "folder", //  do I need this?
      content: [
        {
          id: "componentId1",
          name: "Component 1",
          type: "component", //  component or file?
          content: "Lorem ipsum dolor sit amet",
        },
        {
          id: "componentId2",
          name: "Component 2",
          type: "component", //  component or file?
          content: "Lorem ipsum dolor sit amet,",
        },
      ],
    },
  ],
};

export default { testProjectData };
