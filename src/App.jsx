import { useState } from "react";
import { RxAvatar } from "react-icons/rx";

function App() {
  const [aspekPenilaian, setAspekPenilaian] = useState({
    aspek_penilaian_1: {},
    aspek_penilaian_2: {},
    aspek_penilaian_3: {},
    aspek_penilaian_4: {},
  });

  const handleChangeValue = (event, aspek, mahasiswa) => {
    const newValue = event.target.value;
    setAspekPenilaian((prevState) => {
      const newState = { ...prevState };
      newState[aspek][mahasiswa] = newValue;
      return newState;
    });
  };

  const handleSave = () => {
    const json = JSON.stringify(aspekPenilaian);
    localStorage.setItem("aspekPenilaian", json);
    console.log(aspekPenilaian);
  };
  
  const options = [1,2,3,4,5,6,7,8,9,10]

  const optionsItems = options.map((option) =>  <option key={option}>{option}</option>)

  return (
    <>
      <div className="border-2 flex items-center flex-col justify-center h-screen">
        <div className="font-semibold text-lg py-4">
          <p>Aspek Penilaian Mahasiswa</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className=" text-center ml-48 flex gap-8">
            <p className="w-[82px] ">Aspek Penilaian 1</p>
            <p className="w-[82px] ">Aspek Penilaian 2</p>
            <p className="w-[82px] ">Aspek Penilaian 3</p>
            <p className="w-[82px] ">Aspek Penilaian 4</p>
          </div>
          <div className="border-2 py-1 px-4 flex gap-4 items-center">
            <div className="flex items-center px-2 gap-4">
              <RxAvatar size="32px" />
              <p>Mahasiswa 1</p>
            </div>
            <div className="flex items-center">
              <select
                className="w-24 py-1"
                value={aspekPenilaian.aspek_penilaian_1.mahasiswa1}
                onChange={(event) =>
                  handleChangeValue(event, "aspek_penilaian_1", "mahasiswa1")
                }
              >
              {optionsItems}
              </select>
            </div>
            <div className="flex items-center">
              <select
                className="w-24 py-1"
                value={aspekPenilaian.aspek_penilaian_2.mahasiswa1}
                onChange={(event) =>
                  handleChangeValue(event, "aspek_penilaian_2", "mahasiswa1")
                }
              >
              {optionsItems}
              </select>
            </div>
            <div className="flex items-center">
              <select
                className="w-24 py-1"
                value={aspekPenilaian.aspek_penilaian_3.mahasiswa1}
                onChange={(event) =>
                  handleChangeValue(event, "aspek_penilaian_3", "mahasiswa1")
                }
              >
              {optionsItems}
              </select>
            </div>
            <div className="flex items-center">
              <select
                className="w-24 py-1"
                value={aspekPenilaian.aspek_penilaian_4.mahasiswa1}
                onChange={(event) =>
                  handleChangeValue(event, "aspek_penilaian_4", "mahasiswa1")
                }
              >
              {optionsItems}
              </select>
            </div>
          </div>
          <div className="border-2 py-1 px-4 flex gap-4 items-center">
            <div className="flex items-center px-2 gap-4">
              <RxAvatar size="32px" />
              <p>Mahasiswa 2</p>
            </div>
            <div className="flex items-center">
              <select
                className="w-24 py-1"
                value={aspekPenilaian.aspek_penilaian_1.mahasiswa2}
                onChange={(event) =>
                  handleChangeValue(event, "aspek_penilaian_1", "mahasiswa2")
                }
              >
              {optionsItems}
              </select>
            </div>
            <div className="flex items-center">
              <select
                className="w-24 py-1"
                value={aspekPenilaian.aspek_penilaian_2.mahasiswa2}
                onChange={(event) =>
                  handleChangeValue(event, "aspek_penilaian_2", "mahasiswa2")
                }
              >
              {optionsItems}
              </select>
            </div>
            <div className="flex items-center">
              <select
                className="w-24 py-1"
                value={aspekPenilaian.aspek_penilaian_3.mahasiswa2}
                onChange={(event) =>
                  handleChangeValue(event, "aspek_penilaian_3", "mahasiswa2")
                }
              >
              {optionsItems}
              </select>
            </div>
            <div className="flex items-center">
              <select
                className="w-24 py-1"
                value={aspekPenilaian.aspek_penilaian_4.mahasiswa2}
                onChange={(event) =>
                  handleChangeValue(event, "aspek_penilaian_4", "mahasiswa2")
                }
              >
              {optionsItems}
            </select>
            </div>
          </div>
          <div className="border-2 py-1 px-4 flex gap-4 items-center">
            <div className="flex items-center px-2 gap-4">
              <RxAvatar size="32px" />
              <p>Mahasiswa 3</p>
            </div>
            <div className="flex items-center">
              <select
                className="w-24 py-1"
                value={aspekPenilaian.aspek_penilaian_1.mahasiswa3}
                onChange={(event) =>
                  handleChangeValue(event, "aspek_penilaian_1", "mahasiswa3")
                }
              >
              {optionsItems}
              </select>
            </div>
            <div className="flex items-center">
              <select
                className="w-24 py-1"
                value={aspekPenilaian.aspek_penilaian_2.mahasiswa3}
                onChange={(event) =>
                  handleChangeValue(event, "aspek_penilaian_2", "mahasiswa3")
                }
              >
              {optionsItems}
              </select>
            </div>
            <div className="flex items-center">
              <select
                className="w-24 py-1"
                value={aspekPenilaian.aspek_penilaian_3.mahasiswa3}
                onChange={(event) =>
                  handleChangeValue(event, "aspek_penilaian_3", "mahasiswa3")
                }
              >
              {optionsItems}
              </select>
            </div>
            <div className="flex items-center">
              <select
                className="w-24 py-1"
                value={aspekPenilaian.aspek_penilaian_4.mahasiswa3}
                onChange={(event) =>
                  handleChangeValue(event, "aspek_penilaian_4", "mahasiswa3")
                }
              >
              {optionsItems}
              </select>
            </div>
          </div>
          <div className="border-2 py-1 px-4 flex gap-4 items-center">
            <div className="flex items-center px-2 gap-4">
              <RxAvatar size="32px" />
              <p>Mahasiswa 4</p>
            </div>
            <div className="flex items-center">
              <select
                className="w-24 py-1"
                value={aspekPenilaian.aspek_penilaian_1.mahasiswa4}
                onChange={(event) =>
                  handleChangeValue(event, "aspek_penilaian_1", "mahasiswa4")
                }
              >
              {optionsItems}
              </select>
            </div>
            <div className="flex items-center">
              <select
                className="w-24 py-1"
                value={aspekPenilaian.aspek_penilaian_2.mahasiswa4}
                onChange={(event) =>
                  handleChangeValue(event, "aspek_penilaian_2", "mahasiswa4")
                }
              >
              {optionsItems}
              </select>
            </div>
            <div className="flex items-center">
              <select
                className="w-24 py-1"
                value={aspekPenilaian.aspek_penilaian_3.mahasiswa4}
                onChange={(event) =>
                  handleChangeValue(event, "aspek_penilaian_3", "mahasiswa4")
                }
              >
              {optionsItems}
              </select>
            </div>
            <div className="flex items-center">
              <select
                className="w-24 py-1"
                value={aspekPenilaian.aspek_penilaian_4.mahasiswa4}
                onChange={(event) =>
                  handleChangeValue(event, "aspek_penilaian_4", "mahasiswa4")
                }
              >
              {optionsItems}
              </select>
            </div>
          </div>
        </div>
        <div className="py-4">
          <button className="px-4 bg-gray-700 text-white" onClick={handleSave}>simpan</button>
        </div>
      </div>
    </>
  );
}

export default App;
