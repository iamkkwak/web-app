"use client";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 bg-gray-100 py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">왓챠피디아</h3>
            <p className="text-sm text-gray-600">
              영화, TV 프로그램, 책, 웹툰에 대한 정보와 평가를 제공합니다.
            </p>
          </div>

          <div>
            <h3 className="text-md mb-4 font-bold">서비스</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary text-sm text-gray-600"
                >
                  소개
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs"
                  className="hover:text-primary text-sm text-gray-600"
                >
                  채용
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary text-sm text-gray-600"
                >
                  문의
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-primary text-sm text-gray-600"
                >
                  자주 묻는 질문
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-md mb-4 font-bold">법적 고지</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="hover:text-primary text-sm text-gray-600"
                >
                  이용약관
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-primary text-sm text-gray-600"
                >
                  개인정보 처리방침
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie"
                  className="hover:text-primary text-sm text-gray-600"
                >
                  쿠키 정책
                </Link>
              </li>
              <li>
                <Link
                  href="/legal"
                  className="hover:text-primary text-sm text-gray-600"
                >
                  법적 고지사항
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-md mb-4 font-bold">팔로우하기</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary text-gray-600">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="hover:text-primary text-gray-600">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-primary text-gray-600">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} 왓챠피디아 클론. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
