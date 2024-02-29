import logo from "@/components/logoImg/Frame 3.svg";
import Image from "next/image";
import Link from "next/link";

export const SignUp = () => {
  return (
    <div className="w-full h-full flex bg-[#ffffff]">
      <div className="w-[50%] h-full flex justify-center items-center">
        <div className="w-[384px] relative flex flex-col gap-10">
          <div className="mx-auto">
            <Image
              src={logo}
              width={92.34}
              height={34.31}
              className="mx-auto"
            />
          </div>
          <div className="mx-auto w-[287px] h-[64px] gap-2 flex flex-col justify-center">
            <p className="text-center font-[600] text-[24px] leading-[32px] text-[#0f172a]">
              Welcome Back
            </p>
            <p className="font-[400] text-[16px] leading-[24px] text-[#334155]">
              Welcome back, Please enter your details
            </p>
          </div>
          <div className="w-full h-[176px] gap-4 flex flex-col">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-[48px] rounded-lg border-[1px] p-[16px] bg-[#f3f4f6] border-[#d1d5db]"
            />
            <input
              type="email"
              placeholder="Password"
              className="w-full  h-[48px] rounded-lg border-[1px] p-[16px] bg-[#f3f4f6] border-[#d1d5db] "
            />
            <button className="bg-[#0166ff] h-[48px] rounded-[20px] p-[15px] text-white">
              Login
            </button>
            <div className="flex justify-center">
              <p className="font-[400] text-[16px] leading-[24px] text-[#0f172a]">
                Don't have an account?
              </p>
              <Link href={"SignUp"}>
                <p className="p-sm w-[77px] h-[32px] gap-1 text-center text-[#0166ff]">
                  Sign up
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0166ff] w-[50%] h-full"></div>
    </div>
  );
};
