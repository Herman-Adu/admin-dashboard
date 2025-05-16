"use client";

import {
  Home,
  Inbox,
  Calendar,
  Search,
  Settings,
  User2,
  ChevronUp,
  //Plus,
  //Projector,
  ChevronDown,
  Users2,
  //User,
  FolderGit2,
  //FolderRoot,
  ArrowUpFromLine,
  //ArrowRightFromLine,
  //Newspaper,
  //BadgePoundSterling,
  //ArrowRightLeft,
  //WalletCards,
  //Text,
  Cog,
  ShieldCheck,
  LogIn,
  LogOut,
  Files,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  //SidebarGroupAction,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  //SidebarMenuSub,
  //SidebarMenuSubButton,
  //SidebarMenuSubItem,
  SidebarSeparator,
  useSidebar,
} from "./ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

//import NavLink from "./NavLink";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "User Profile",
    url: "/users/herman-adu",
    icon: Search,
  },
  {
    title: "Inbox",
    url: "/inbox",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "/calendar",
    icon: Calendar,
  },
  {
    title: "Documents",
    url: "/documents",
    icon: Files,
  },
  {
    title: "Tasks",
    url: "/tasks",
    icon: Settings,
  },
  {
    title: "User Settings",
    url: "/user-settings",
    icon: Search,
  },
  {
    title: "Admin Settings",
    url: "/admin-settings",
    icon: Settings,
  },
];

const AppSidebar = () => {
  const { setOpenMobile } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <Image
                  className="hidden dark:block"
                  src="/adudev-light-Logo.png"
                  alt="dark-mode-image"
                  width={20}
                  height={20}
                />
                <Image
                  className="block dark:hidden"
                  src="/adudev-Logo.png"
                  alt="light-mode-image"
                  width={20}
                  height={20}
                />
                <span className="mb-[3px]">Adu Dev</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarSeparator className="mr-4" />

      <SidebarContent>
        {/* Application Group */}
        <SidebarGroup>
          <SidebarGroupLabel className="mb-1">Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} onClick={() => setOpenMobile(false)}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.title === "Inbox" && (
                    <SidebarMenuBadge>128</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Projects Group */}
        {/* <SidebarGroup>
          <SidebarGroupLabel>Users</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus /> <span className="sr-only">Add User</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/users">
                    <Projector />
                    <span>See All Users</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/">
                    <Plus />
                    <span>Add User</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup> */}

        {/* Projects Group */}
        {/* <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/#">
                    <Projector />
                    <span>See All Projects</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/#">
                    <Plus />
                    <span>Add Project</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup> */}

        {/* Collapsible Projects Group */}
        {/* <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Collapsible Group
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>

            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/#">
                        <Projector />
                        <span>See All Projects</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/#">
                        <Plus />
                        <span>Add Project</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible> */}

        {/* Users */}
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild className="mb-1">
              <CollapsibleTrigger>
                Users
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>

            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/users" onClick={() => setOpenMobile(false)}>
                        <Users2 />
                        <span>See All Users</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/users" onClick={() => setOpenMobile(false)}>
                        <User2 />
                        <span>Add User</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        {/* Financial Overview Group */}
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild className="mb-1">
              <CollapsibleTrigger>
                Financial Overview
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>

            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link
                        href="/financial-dashboard"
                        onClick={() => setOpenMobile(false)}
                      >
                        <FolderGit2 />
                        <span>Dashboard</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link
                        href="/financial-dashboard/transactions"
                        onClick={() => setOpenMobile(false)}
                      >
                        <ArrowUpFromLine />
                        <span>Recent Transactions</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        {/* Nested Collapsible Financial Overview Group */}
        {/*<Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Financial Overview
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>

             <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                          <Link href="/financial-dashboard">
                            <FolderGit2 />
                            <span>Dashboard</span>
                          </Link>
                        </SidebarMenuSubButton>

                        <NavLink
                          href="/financial-dashboard"
                          icon={<WalletCards size={16} />}
                          title="Dashboard"
                        />
                      </SidebarMenuSubItem>

                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                          <Link href="/financial-dashboard/transactions">
                            <ArrowUpFromLine />
                            <span>Recent Transactions</span>
                          </Link>

                          <NavLink
                            href="/financial-dashboard/transactions"
                            icon={<ArrowRightLeft size={16} />}
                            title="Recent Transactions"
                          />
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent> 
          </SidebarGroup>
        </Collapsible>*/}

        {/* Nested Group */}
        {/* <SidebarGroup>
          <SidebarGroupLabel>Nested Items Group</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/#">
                    <Projector />
                    <span>React Projects</span>
                  </Link>
                </SidebarMenuButton>

                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="/#">
                        <Plus />
                        <span>All Projects</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>

                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="/#">
                        <Plus />
                        <span>Add Project</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>

                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="/#">
                        <Plus />
                        <span>Add Category</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup> */}

        {/* Nested Collapsible Projects Group */}
        {/* <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Nested Items Collapsible Group
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>

            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/#">
                        <Projector />
                        <span>Next Projects</span>
                      </Link>
                    </SidebarMenuButton>

                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                          <Link href="/#">
                            <Plus />
                            <span>All Projects</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>

                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                          <Link href="/#">
                            <Plus />
                            <span>Add Project</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>

                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                          <Link href="/#">
                            <Plus />
                            <span>Add Category</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent> */}

        {/* Nested Collapsible Projects Group */}
        {/* <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Projects
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>

            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                          <Link href="/">
                            <FolderGit2 />
                            <span>All Projects</span>
                          </Link>

                          {/* <NavLink
                            href="/"
                            icon={<FolderGit2 size={16} />}
                            title="All Projects"
                          /> 
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>

                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                          <Link href="/">
                            <ArrowUpFromLine />
                            <span>Add Project</span>
                          </Link>

                          <NavLink
                            href="/"
                            icon={<ArrowUpFromLine size={16} />}
                            title="Add Project"
                          />
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>

                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                          <Link href="/">
                            <ArrowUpFromLine />
                            <span>Add Category</span>
                          </Link>

                          <NavLink
                            href="/"
                            icon={<Text size={16} />}
                            title="Add Category"
                          />
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible> */}

        {/* Nested Collapsible Projects Group */}
        {/*<Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Articles
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>

             <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                          <Link href="/">
                            <Newspaper />
                            <span>All Articles</span>
                          </Link>

                          <NavLink
                            href="/"
                            icon={<Newspaper size={16} />}
                            title="All Articles"
                          />
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>

                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                          <Link href="/">
                            <ArrowUpFromLine />
                            <span>Add Article</span>
                          </Link>

                          <NavLink
                            href="/"
                            icon={<ArrowUpFromLine size={16} />}
                            title="Add Post"
                          />
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>

                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                          <Link href="/">
                            <ArrowUpFromLine />
                            <span>Add Category</span>
                          </Link>

                          <NavLink
                            href="/"
                            icon={<Text size={16} />}
                            title="Add Category"
                          /> 
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent> 
          </SidebarGroup>
        </Collapsible>*/}
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Herman Adu <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <SidebarMenuButton asChild>
                    <Link
                      href="/users/herman-adu"
                      onClick={() => setOpenMobile(false)}
                    >
                      <ShieldCheck />
                      <span>Account</span>
                    </Link>
                  </SidebarMenuButton>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SidebarMenuButton asChild>
                    <Link
                      href="/user-settings"
                      onClick={() => setOpenMobile(false)}
                    >
                      <Cog />
                      <span>Settings</span>
                    </Link>
                  </SidebarMenuButton>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/" onClick={() => setOpenMobile(false)}>
                      <LogOut />
                      <span>Sign out</span>
                    </Link>
                  </SidebarMenuButton>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SidebarMenuButton asChild>
                    <Link
                      href="/authentication"
                      onClick={() => setOpenMobile(false)}
                    >
                      <LogIn />
                      <span>Sign in</span>
                    </Link>
                  </SidebarMenuButton>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
