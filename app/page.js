"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (user) {
      router.push('/dashboard')
    }
    else {
      isLoaded && router.push('/courses')
    }
  }, [user]);
  return (
    <>
      <UserButton afterSignOutUrl="/sign-in" />
    </>
  );
};

export default Home;
