import { Header } from "../components";
const userData = [
  {
    email: "123@mail.com",
    name: "Смирнова Анастасия",
    status: "Пульмонолог",
    role: "Врач",
    lastUpdate: "01-01-2024",
    action: "Действия",
  },
  {
    email: "123@mail.com",
    name: "Смирнова Анастасия",
    status: "Пульмонолог",
    role: "Врач",
    lastUpdate: "01-01-2024",
    action: "Действия",
  },
  {
    email: "123@mail.com",
    name: "Смирнова Анастасия",
    status: "Пульмонолог",
    role: "Врач",
    lastUpdate: "01-01-2024",
    action: "Действия",
  },
  {
    email: "123@mail.com",
    name: "Смирнова Анастасия",
    status: "Пульмонолог",
    role: "Врач",
    lastUpdate: "01-01-2024",
    action: "Действия",
  },
  {
    email: "123@mail.com",
    name: "Смирнова Анастасия",
    status: "Пульмонолог",
    role: "Врач",
    lastUpdate: "01-01-2024",
    action: "Действия",
  },
  {
    email: "123@mail.com",
    name: "Смирнова Анастасия",
    status: "Пульмонолог",
    role: "Врач",
    lastUpdate: "01-01-2024",
    action: "Действия",
  },
];

const UserManagement = () => {
  return (
    <>
      <div className="container">
        <Header color={true} darkColor={true} />
      </div>

      <div className="lg:max-w-[1285px] max-w-[95%] mx-auto">
        <h2 className="big__title mt-16">Управление пользователями</h2>
      </div>
      <div className="lg:max-w-[1285px] max-w-[95%] mx-auto mb-[31px] overflow-x-scroll sm:mx-auto">
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
              {/* <tr> */}
              {userData?.map((item, index) => (
                <tr key={index}>
                  <td
                    className="border border-[#00AAA15E] px-6 py-3"
                    key={index}
                  >
                    {item.email}
                  </td>
                  <td
                    className="border border-[#00AAA15E] px-6 py-3"
                    key={index}
                  >
                    {item.name}
                  </td>
                  <td
                    className="text-teal underline border border-[#00AAA15E] px-6 py-3"
                    key={index}
                  >
                    {item.status}
                  </td>
                  <td
                    className="text-teal underline border border-[#00AAA15E] px-6 py-3"
                    key={index}
                  >
                    {item.role}
                  </td>
                  <td
                    className="border border-[#00AAA15E] px-6 py-3"
                    key={index}
                  >
                    {item.lastUpdate}
                  </td>
                  <td
                    className="text-teal underline border border-[#00AAA15E] px-6 py-3"
                    key={index}
                  >
                    {item.action}
                  </td>
                </tr>
              ))}
              {/* </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserManagement;
