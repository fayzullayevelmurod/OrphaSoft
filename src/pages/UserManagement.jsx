import { useState } from "react";
import { Header, StatusModal } from "../components";
const userData = [
  {
    id: 0,
    email: "123@mail.com",
    name: "Смирнова Анастасия",
    status: "Пульмонолог",
    role: "Врач",
    lastUpdate: "01-01-2024",
    action: "Действия",
  },
  {
    id: 1,
    email: "123@mail.com",
    name: "Смирнова Анастасия",
    status: "Пульмонолог",
    role: "Врач",
    lastUpdate: "01-01-2024",
    action: "Действия",
  },
  {
    id: 2,
    email: "123@mail.com",
    name: "Смирнова Анастасия",
    status: "Пульмонолог",
    role: "Врач",
    lastUpdate: "01-01-2024",
    action: "Действия",
  },
  {
    id: 3,
    email: "123@mail.com",
    name: "Смирнова Анастасия",
    status: "Пульмонолог",
    role: "Врач",
    lastUpdate: "01-01-2024",
    action: "Действия",
  },
  {
    id: 4,
    email: "123@mail.com",
    name: "Смирнова Анастасия",
    status: "Пульмонолог",
    role: "Врач",
    lastUpdate: "01-01-2024",
    action: "Действия",
  },
  {
    id: 5,
    email: "123@mail.com",
    name: "Смирнова Анастасия",
    status: "Пульмонолог",
    role: "Врач",
    lastUpdate: "01-01-2024",
    action: "Действия",
  },
];

const UserManagement = () => {
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [showActionModal, setShowActionModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // const handleOpenStatusModal = (index) => {
  //   setShowRoleModal(false);
  //   setSelectedItem(index);
  //   setShowStatusModal(!showStatusModal);
  // };
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleOpenStatusModal = (itemId) => {
    setSelectedItemId(itemId);
    setShowRoleModal(false);
    setShowStatusModal(!showStatusModal);
  };

  const handleOpenRoleModal = (itemId) => {
    setShowRoleModal(!showRoleModal);
    setShowStatusModal(false);
    setSelectedItemId(itemId);
  };

  const handleOpenActionModal = (itemId) => {
    setShowRoleModal(false);
    setShowStatusModal(false);
    setShowActionModal(!showActionModal);
    setSelectedItemId(itemId);
  };

  return (
    <>
      <div className="max-w-[1061px] mx-auto lg:px-0 sm:px-6 px-4">
        <Header color={true} darkColor={true} className="black__header" />
      </div>
      <div className="lg:max-w-[1285px] h-full max-w-[95%] mx-auto">
        <h2 className="big__title mt-16">Управление пользователями</h2>
      </div>
      <div className="lg:max-w-[1285px] max-w-[95%] mx-auto mb-[31px] overflow-x-scroll overflow-y-visible table__box sm:mx-auto">
        <div>
          <table className="w-full mt-6 border-t border-[#00AAA15E] text-base font-semibold text-center text-black">
            <thead className="bg-[#00AAA15E] border border-[#00AAA15E]">
              <tr>
                <td className="border border-[#00AAA15E]">Эл. Адрес</td>
                <td className="border border-[#00AAA15E]">Имя</td>
                <td className="border border-[#00AAA15E]">Статус</td>
                <td className="border border-[#00AAA15E]">Уровень прав</td>
                <td className="border border-[#00AAA15E] px-6 py-3">
                  Дата обновления <br /> пароля
                </td>
                <td className="border border-[#00AAA15E] px-6 py-3">
                  Действия
                </td>
              </tr>
            </thead>
            <tbody className="bg-[#FAFAFA]">
              {userData?.map((item) => (
                <tr key={item.id}>
                  <td className="border border-[#00AAA15E] px-6 py-3">
                    {item.email}
                  </td>
                  <td className="border border-[#00AAA15E] px-6 py-3">
                    {item.name}
                  </td>
                  <td
                    className="text-teal cursor-pointer relative underline border border-[#00AAA15E] px-6 py-3"
                    onClick={() => handleOpenStatusModal(item.id)}
                  >
                    {item.status}
                    {selectedItemId === item.id && showStatusModal && (
                      <StatusModal />
                    )}
                  </td>
                  <td
                    className="text-teal cursor-pointer relative underline border border-[#00AAA15E] px-6 py-3"
                    onClick={() => handleOpenRoleModal(item.id)}
                  >
                    {item.role}
                    {selectedItemId === item.id && showRoleModal && (
                      <RoleModal />
                    )}
                  </td>
                  <td className="border border-[#00AAA15E] px-6 py-3">
                    {item.lastUpdate}
                  </td>
                  <td
                    className="text-teal relative cursor-pointer underline border border-[#00AAA15E] px-6 py-3"
                    onClick={() => handleOpenActionModal(item.id)}
                  >
                    {item.action}
                    {selectedItemId === item.id && showActionModal && (
                      <ActionModal />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserManagement;

export const RoleModal = () => {
  return (
    <div className="bg-white absolute z-50 shadow-lg top-full left-0 w-fit text-center p-5">
      <p className="text-black text-base font-semibold leading-6">
        Пациент <br /> Исследователь <br /> Врач <br /> Модератор
      </p>
    </div>
  );
};

export const ActionModal = () => {
  return (
    <div className="bg-white absolute z-50 shadow-lg top-full left-1/2 -translate-x-1/2 w-fit text-center p-5">
      <p className="text-black text-base font-semibold leading-6 whitespace-nowrap">
        Действие 1 <br /> Действие 2 <br /> Действие 3 <br /> Действие 4
      </p>
    </div>
  );
};
