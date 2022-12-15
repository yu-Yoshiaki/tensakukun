export const Table = () => {
  return (
    <table className="max-w-[700px] overflow-hidden border-white">
      <tr className="h-10 border-b border-white text-center text-gray-700">
        <th className="w-[200px] bg-gray-50"></th>
        <th className="w-[200px] bg-green-200">全体</th>
        <th className="w-[200px] bg-blue-200">男性</th>
        <th className="w-[200px] bg-red-200">女性</th>
      </tr>
      <tr className="h-10 whitespace-nowrap border-b border-white text-center text-gray-700">
        <th className="bg-gray-50 ">Twitter</th>
        <td className="bg-green-200">240</td>
        <td className="bg-blue-200">100</td>
        <td className="bg-red-200">140</td>
      </tr>
      <tr className="h-10 whitespace-nowrap border-b border-white bg-gray-50 text-center text-gray-700">
        <th className="bg-gray-50 ">FaceBook</th>
        <td className="bg-green-200">110</td>
        <td className="bg-blue-200">70</td>
        <td className="bg-red-200">40</td>
      </tr>
      <tr className="h-10 whitespace-nowrap border-b border-white bg-green-200 text-center text-gray-700">
        <th className="bg-gray-50 ">Instagram</th>
        <td className="bg-green-200">300</td>
        <td className="bg-blue-200">100</td>
        <td className="bg-red-200">200</td>
      </tr>
      <tr className="h-10 whitespace-nowrap border-b border-white bg-gray-50 text-center text-gray-700">
        <th className="bg-gray-50 ">TicToc</th>
        <td className="bg-green-200">280</td>
        <td className="bg-blue-200">130</td>
        <td className="bg-red-200">150</td>
      </tr>
      <tr className="h-10 whitespace-nowrap border-b border-white bg-green-200 text-center text-gray-700">
        <th className="bg-gray-50 ">WEBサイト</th>
        <td className="bg-green-200">90</td>
        <td className="bg-blue-200">80</td>
        <td className="bg-red-200">10</td>
      </tr>
      <tr className="h-10 whitespace-nowrap border-b border-white bg-gray-50 text-center text-gray-700">
        <th className="bg-gray-50 ">店舗</th>
        <td className="bg-green-200">70</td>
        <td className="bg-blue-200">20</td>
        <td className="bg-red-200">50</td>
      </tr>
    </table>
  );
};
