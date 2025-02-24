import React, { useState } from "react";
import { notices } from "../data";
import "remixicon/fonts/remixicon.css";

const Notice = () => {
  const sortedData = [...notices].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const currentDate = new Date();

  return (
    <div id="notice" className=" text-white p-8">
      <div className="container mx-auto px-4">
        <div id="notice_heading" className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3498db] mb-4">
            Notice Board
          </h1>
          <p className="text-xl text-gray-400">
            Official Updates from Trinity Computer Council
          </p>
          <a
            href="https://www.instagram.com/trinitycomputercouncil/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 italic text-gray-200 hover:text-gray-400"
          >
            Follow us on Instagram
          </a>
        </div>

        <div id="notice_container" className="space-y-8">
          {/* Check if there are any notices */}
          {sortedData.length === 0 ? (
            <p className="text-center text-xl text-gray-400">
              No notices available till now.
            </p>
          ) : (
            sortedData.map((item, id) => {
              const noticeDate = new Date(item.date);
              const timeDifference = currentDate - noticeDate;
              const isNew = timeDifference <= 24 * 60 * 60 * 1000;
              const isLarge = item.description.length > 300;
              const [isExpanded, setIsExpanded] = useState(false);

              return (
                <div
                  key={id}
                  className="bg-gray-800 rounded-lg shadow-xl p-6 transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-semibold text-[#3498db]">
                        {id + 1}. {item.noticeName}
                      </h2>
                      {isNew && (
                        <span className="bg-[crimson] text-white text-xs font-bold px-3 py-1 rounded-full">
                          NEW
                        </span>
                      )}
                    </div>
                    <div className="mt-2 flex space-x-4 text-sm text-gray-400">
                      <span>
                        <b>Date:</b> {item.date}
                      </span>
                      <span>
                        <b>Time:</b> {item.time}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <span className="text-gray-300 leading-relaxed">
                      {item.description.length <= 300 || isExpanded
                        ? item.description
                        : `${item.description.slice(0, 300)}...`}

                      <br />
                      <br />
                      {item?.links.length > 0 && (
                        <h3 className="text-lg"> 📌 ⚠️ Important Links:</h3>
                      )}
                      {item?.links.map((item, id) => (
                        <>
                          <span key={id} className="underline">
                            {item.name} :
                          </span>{" "}
                          &nbsp; &nbsp;
                          <a
                            key={id}
                            href={item.link}
                            target="_blank"
                            className="text-[#3498db] hover:text-blue-400"
                          >
                            {item.name}
                          </a>
                          <br />
                        </>
                      ))}
                      {isLarge && (
                        <button
                          onClick={() => setIsExpanded(!isExpanded)}
                          className="text-[#3498db] hover:text-blue-400 ml-2 font-medium flex items-center"
                        >
                          <i
                            className={`ri-arrow-${
                              isExpanded ? "up" : "down"
                            }-s-line mr-1`}
                          />
                          {isExpanded ? "Show Less" : "Read More"}
                        </button>
                      )}
                    </span>

                    {item?.img.length > 0 && (
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                        {item?.img.map((image, index) => (
                          <div
                            key={index}
                            className="overflow-hidden rounded-lg group relative"
                          >
                            <img
                              src={image}
                              alt={`Notice ${index + 1}`}
                              className="w-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Notice;
