import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconClipboardCopy,
    IconDownload,
    IconMenu,
  } from "@tabler/icons-react";
  import React, { useState, useEffect } from "react";
  
  export default function ActionButtons() {
    const email = "jordan@jmwalsh.dev";
    const [isFab, setIsFab] = useState(false);
    const [fabOpen, setFabOpen] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.pageYOffset > 200) {
          setIsFab(true);
        } else {
          setIsFab(false);
          setFabOpen(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const copyEmail = async () => {
      try {
        await navigator.clipboard.writeText(email);
      } catch (err) {
        console.error("Failed to copy email", err);
      }
    };
  
    const fullButtons = (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <a
          href="/WalshResume.pdf"
          download
          className="flex items-center gap-2 justify-center px-4 py-2 border border-cyan-500 text-cyan-500 font-semibold rounded-md transition-colors hover:bg-cyan-500 hover:text-black"
        >
          <IconDownload size={20} />
          <span className="text-sm">Resume</span>
        </a>
        <button
          onClick={copyEmail}
          className="flex items-center gap-2 justify-center px-4 py-2 border border-cyan-500 text-cyan-500 font-semibold rounded-md transition-colors hover:bg-cyan-500 hover:text-black"
        >
          <IconClipboardCopy size={20} />
          <span className="text-sm">Email</span>
        </button>
        <a
          href="https://github.com/jmwalsh91"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 justify-center px-4 py-2 border border-cyan-500 text-cyan-500 font-semibold rounded-md transition-colors hover:bg-cyan-500 hover:text-black"
        >
          <IconBrandGithub size={20} />
          <span className="text-sm">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/jmwalshdev/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 justify-center px-4 py-2 border border-cyan-500 text-cyan-500 font-semibold rounded-md transition-colors hover:bg-cyan-500 hover:text-black"
        >
          <IconBrandLinkedin size={20} />
          <span className="text-sm">LinkedIn</span>
        </a>
      </div>
    );
  
    const fabButtons = (
      <div className="grid grid-cols-2 gap-2">
        <a
          href="/WalshResume.pdf"
          download
          className="flex items-center gap-1 justify-center px-3 py-2 border border-cyan-500 bg-zinc-900 text-cyan-500 text-xs font-medium rounded transition-colors hover:bg-cyan-500 hover:text-black"
        >
          <IconDownload size={16} />
          <span>Resume</span>
        </a>
        <button
          onClick={copyEmail}
          className="flex items-center gap-1 justify-center px-3 py-2 border border-cyan-500 bg-zinc-900 text-cyan-500 text-xs font-medium rounded transition-colors hover:bg-cyan-500 hover:text-black"
        >
          <IconClipboardCopy size={16} />
          <span>Email</span>
        </button>
        <a
          href="https://github.com/jmwalsh91"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 justify-center px-3 py-2 border border-cyan-500 bg-zinc-900 text-cyan-500 text-xs font-medium rounded transition-colors hover:bg-cyan-500 hover:text-black"
        >
          <IconBrandGithub size={16} />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/jmwalshdev/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 justify-center px-3 py-2 border border-cyan-500 bg-zinc-900 text-cyan-500 text-xs font-medium rounded transition-colors hover:bg-cyan-500 hover:text-black"
        >
          <IconBrandLinkedin size={16} />
          <span>LinkedIn</span>
        </a>
      </div>
    );
  
    if (!isFab) {
      return <div className="mt-8">{fullButtons}</div>;
    }
  
    return (
      <>
        {fabOpen && (
          <div className="fixed bottom-20 right-4 z-50">
            <div className="mb-2">{fabButtons}</div>
          </div>
        )}
        <div
          onClick={() => setFabOpen((prev) => !prev)}
          className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-16 h-16 bg-cyan-500 text-black rounded-full shadow-lg transition-transform hover:scale-105"
        >
          <IconMenu size={24} />
        </div>
      </>
    );
  }
  