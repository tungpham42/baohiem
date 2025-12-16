import { Term, ClaimStep, Hospital } from "../types";

// ==========================================
// 1. DATA THUẬT NGỮ (GLOSSARY) - ~300 items
// ==========================================
export const termsData: Term[] = [
  // --- General / Chung --- (đã có 7, thêm 63 nữa)
  {
    id: "g1",
    term: "Mức miễn thường (Deductible)",
    definition:
      "Số tiền tổn thất mà người được bảo hiểm phải tự chịu trước khi công ty bảo hiểm chi trả.",
    category: "General",
  },
  {
    id: "g2",
    term: "Phí bảo hiểm (Premium)",
    definition:
      "Số tiền bên mua bảo hiểm phải đóng cho doanh nghiệp bảo hiểm theo kỳ hoặc một lần.",
    category: "General",
  },
  {
    id: "g3",
    term: "Số tiền bảo hiểm (Sum Insured)",
    definition:
      "Số tiền tối đa mà doanh nghiệp bảo hiểm có thể chi trả cho một sự kiện bảo hiểm.",
    category: "General",
  },
  {
    id: "g4",
    term: "Hợp đồng vô hiệu",
    definition:
      "Hợp đồng không có giá trị pháp lý do vi phạm nguyên tắc trung thực tuyệt đối hoặc không có quyền lợi có thể được bảo hiểm.",
    category: "General",
  },
  {
    id: "g5",
    term: "Tái tục (Renewal)",
    definition:
      "Việc gia hạn hợp đồng bảo hiểm sau khi hợp đồng cũ hết hiệu lực.",
    category: "General",
  },
  {
    id: "g6",
    term: "Bên mua bảo hiểm (Policyholder)",
    definition:
      "Tổ chức, cá nhân giao kết hợp đồng bảo hiểm với doanh nghiệp bảo hiểm và đóng phí bảo hiểm.",
    category: "General",
  },
  {
    id: "g7",
    term: "Người thụ hưởng (Beneficiary)",
    definition:
      "Tổ chức, cá nhân được chỉ định để nhận tiền bảo hiểm khi sự kiện bảo hiểm xảy ra.",
    category: "General",
  },
  {
    id: "g8",
    term: "Người được bảo hiểm (Insured)",
    definition:
      "Người mà rủi ro được bảo hiểm, có thể trùng hoặc không trùng với người mua bảo hiểm.",
    category: "General",
  },
  {
    id: "g9",
    term: "Doanh nghiệp bảo hiểm (Insurer)",
    definition:
      "Tổ chức kinh doanh bảo hiểm được cấp phép, có trách nhiệm chi trả khi sự kiện bảo hiểm xảy ra.",
    category: "General",
  },
  {
    id: "g10",
    term: "Đại lý bảo hiểm (Insurance Agent)",
    definition:
      "Cá nhân hoặc tổ chức được doanh nghiệp bảo hiểm ủy quyền để bán và tư vấn sản phẩm bảo hiểm.",
    category: "General",
  },
  {
    id: "g11",
    term: "Môi giới bảo hiểm (Insurance Broker)",
    definition:
      "Tổ chức đại diện cho bên mua bảo hiểm, tìm kiếm và tư vấn sản phẩm bảo hiểm phù hợp nhất.",
    category: "General",
  },
  {
    id: "g12",
    term: "Đơn bảo hiểm (Policy)",
    definition:
      "Văn bản pháp lý thể hiện hợp đồng bảo hiểm giữa bên mua và doanh nghiệp bảo hiểm.",
    category: "General",
  },
  {
    id: "g13",
    term: "Giấy chứng nhận bảo hiểm (Certificate of Insurance)",
    definition:
      "Tài liệu chứng minh hợp đồng bảo hiểm đã có hiệu lực, thường dùng cho bảo hiểm nhóm.",
    category: "General",
  },
  {
    id: "g14",
    term: "Điều khoản bảo hiểm (Policy Terms & Conditions)",
    definition:
      "Các quy định, điều kiện chi tiết về quyền lợi, nghĩa vụ và phạm vi bảo hiểm.",
    category: "General",
  },
  {
    id: "g15",
    term: "Loại trừ bảo hiểm (Exclusions)",
    definition:
      "Các trường hợp, rủi ro không được bảo hiểm chi trả theo quy định của hợp đồng.",
    category: "General",
  },
  {
    id: "g16",
    term: "Sự kiện bảo hiểm (Insured Event)",
    definition:
      "Sự kiện thuộc phạm vi bảo hiểm xảy ra, dẫn đến trách nhiệm chi trả của doanh nghiệp bảo hiểm.",
    category: "General",
  },
  {
    id: "g17",
    term: "Bồi thường (Indemnity)",
    definition:
      "Nguyên tắc bồi thường theo giá trị thực tế, không để người được bảo hiểm có lợi nhuận từ việc bảo hiểm.",
    category: "General",
  },
  {
    id: "g18",
    term: "Quyền lợi có thể được bảo hiểm (Insurable Interest)",
    definition:
      "Lợi ích tài chính hợp pháp mà người được bảo hiểm có đối với đối tượng bảo hiểm.",
    category: "General",
  },
  {
    id: "g19",
    term: "Nguyên tắc trung thực tuyệt đối (Utmost Good Faith)",
    definition:
      "Nguyên tắc yêu cầu cả hai bên phải cung cấp thông tin đầy đủ, chính xác khi giao kết hợp đồng.",
    category: "General",
  },
  {
    id: "g20",
    term: "Đóng phí (Premium Payment)",
    definition:
      "Hành vi thực hiện nghĩa vụ thanh toán phí bảo hiểm theo thỏa thuận trong hợp đồng.",
    category: "General",
  },
  {
    id: "g21",
    term: "Kỳ đóng phí (Premium Payment Term)",
    definition:
      "Thời hạn mà bên mua bảo hiểm phải đóng phí cho doanh nghiệp bảo hiểm.",
    category: "General",
  },
  {
    id: "g22",
    term: "Phí bảo hiểm định kỳ (Periodic Premium)",
    definition:
      "Phí bảo hiểm được đóng theo các kỳ nhất định như hàng tháng, hàng quý, hàng năm.",
    category: "General",
  },
  {
    id: "g23",
    term: "Phí bảo hiểm một lần (Single Premium)",
    definition:
      "Toàn bộ phí bảo hiểm được đóng một lần duy nhất khi giao kết hợp đồng.",
    category: "General",
  },
  {
    id: "g24",
    term: "Hợp đồng bảo hiểm hỗn hợp (Combined Insurance Contract)",
    definition:
      "Hợp đồng kết hợp giữa bảo hiểm nhân thọ và bảo hiểm phi nhân thọ trong cùng một sản phẩm.",
    category: "General",
  },
  {
    id: "g25",
    term: "Hợp đồng bảo hiểm chính (Main Policy)",
    definition:
      "Hợp đồng bảo hiểm cơ bản, không bao gồm các sản phẩm bổ trợ đi kèm.",
    category: "General",
  },
  {
    id: "g26",
    term: "Hợp đồng bảo hiểm phụ (Supplementary Policy)",
    definition:
      "Hợp đồng bảo hiểm mua kèm theo hợp đồng chính để mở rộng phạm vi bảo hiểm.",
    category: "General",
  },
  {
    id: "g27",
    term: "Điều khoản bổ sung (Endorsement/Rider)",
    definition:
      "Điều khoản được thêm vào hợp đồng để sửa đổi, bổ sung các điều kiện bảo hiểm.",
    category: "General",
  },
  {
    id: "g28",
    term: "Hợp đồng bảo hiểm có thời hạn (Term Insurance Contract)",
    definition:
      "Hợp đồng bảo hiểm có hiệu lực trong một khoảng thời gian xác định.",
    category: "General",
  },
  {
    id: "g29",
    term: "Hợp đồng bảo hiểm trọn đời (Whole Life Insurance Contract)",
    definition:
      "Hợp đồng bảo hiểm có hiệu lực đến suốt đời của người được bảo hiểm.",
    category: "General",
  },
  {
    id: "g30",
    term: "Bảo hiểm tự nguyện (Voluntary Insurance)",
    definition:
      "Bảo hiểm được mua dựa trên nhu cầu và khả năng tài chính của cá nhân/tổ chức.",
    category: "General",
  },
  {
    id: "g31",
    term: "Bảo hiểm bắt buộc (Compulsory Insurance)",
    definition:
      "Bảo hiểm được pháp luật quy định bắt buộc phải mua (như bảo hiểm TNDS xe cơ giới).",
    category: "General",
  },
  {
    id: "g32",
    term: "Bảo hiểm tài sản (Property Insurance)",
    definition:
      "Bảo hiểm cho các rủi ro liên quan đến tài sản như nhà cửa, xe cộ, hàng hóa.",
    category: "General",
  },
  {
    id: "g33",
    term: "Bảo hiểm con người (Personal Insurance)",
    definition:
      "Bảo hiểm cho các rủi ro liên quan đến tính mạng, sức khỏe, thân thể con người.",
    category: "General",
  },
  {
    id: "g34",
    term: "Bảo hiểm trách nhiệm dân sự (Civil Liability Insurance)",
    definition:
      "Bảo hiểm cho trách nhiệm bồi thường thiệt hại gây ra cho người thứ ba.",
    category: "General",
  },
  {
    id: "g35",
    term: "Bảo hiểm kinh doanh (Business Insurance)",
    definition:
      "Bảo hiểm cho các rủi ro trong hoạt động kinh doanh của doanh nghiệp.",
    category: "General",
  },
  {
    id: "g36",
    term: "Giám định tổn thất (Loss Assessment)",
    definition:
      "Quá trình xác định mức độ, nguyên nhân và giá trị thiệt hại của sự kiện bảo hiểm.",
    category: "General",
  },
  {
    id: "g37",
    term: "Khiếu nại bảo hiểm (Insurance Complaint)",
    definition:
      "Việc khách hàng phản ánh, yêu cầu giải quyết các vấn đề liên quan đến hợp đồng, dịch vụ.",
    category: "General",
  },
  {
    id: "g38",
    term: "Giải quyết khiếu nại (Complaint Resolution)",
    definition:
      "Quy trình doanh nghiệp bảo hiểm xử lý và trả lời các khiếu nại của khách hàng.",
    category: "General",
  },
  {
    id: "g39",
    term: "Bảo hiểm vi mô (Microinsurance)",
    definition:
      "Sản phẩm bảo hiểm có giá trị thấp, phí rẻ, dành cho người có thu nhập thấp.",
    category: "General",
  },
  {
    id: "g40",
    term: "Bảo hiểm số (Digital Insurance)",
    definition:
      "Bảo hiểm được mua bán, quản lý hoàn toàn qua kênh số như website, ứng dụng.",
    category: "General",
  },
  {
    id: "g41",
    term: "Bảo hiểm theo yêu cầu (On-demand Insurance)",
    definition:
      "Bảo hiểm được kích hoạt theo nhu cầu cụ thể, trong khoảng thời gian ngắn.",
    category: "General",
  },
  {
    id: "g42",
    term: "Bảo hiểm P2P (Peer-to-Peer Insurance)",
    definition:
      "Mô hình bảo hiểm kết nối trực tiếp giữa các nhóm người có cùng rủi ro.",
    category: "General",
  },
  {
    id: "g43",
    term: "Bảo hiểm tham gia (Participatory Insurance)",
    definition:
      "Bảo hiểm mà khách hàng tham gia vào quá trình quản lý rủi ro và chia sẻ lợi nhuận.",
    category: "General",
  },
  {
    id: "g44",
    term: "Bảo hiểm phi lợi nhuận (Non-profit Insurance)",
    definition:
      "Bảo hiểm do các tổ chức phi lợi nhuận cung cấp, tập trung vào mục tiêu xã hội.",
    category: "General",
  },
  {
    id: "g45",
    term: "Bảo hiểm cộng đồng (Community-based Insurance)",
    definition:
      "Bảo hiểm được tổ chức ở quy mô cộng đồng, dựa trên sự tin cậy và hỗ trợ lẫn nhau.",
    category: "General",
  },
  {
    id: "g46",
    term: "Bảo hiểm xanh (Green Insurance)",
    definition:
      "Bảo hiểm thúc đẩy các hoạt động bảo vệ môi trường, ứng phó biến đổi khí hậu.",
    category: "General",
  },
  {
    id: "g47",
    term: "Bảo hiểm nông nghiệp (Agricultural Insurance)",
    definition:
      "Bảo hiểm cho rủi ro trong sản xuất nông nghiệp như thiên tai, dịch bệnh.",
    category: "General",
  },
  {
    id: "g48",
    term: "Bảo hiểm thủy sản (Aquaculture Insurance)",
    definition:
      "Bảo hiểm cho rủi ro trong nuôi trồng thủy sản như ô nhiễm, bệnh tật.",
    category: "General",
  },
  {
    id: "g49",
    term: "Bảo hiểm lâm nghiệp (Forestry Insurance)",
    definition:
      "Bảo hiểm cho rủi ro trong trồng và khai thác rừng như cháy rừng, sâu bệnh.",
    category: "General",
  },
  {
    id: "g50",
    term: "Bảo hiểm năng lượng (Energy Insurance)",
    definition:
      "Bảo hiểm cho các dự án năng lượng như điện mặt trời, điện gió, dầu khí.",
    category: "General",
  },
  {
    id: "g51",
    term: "Bảo hiểm xây dựng (Construction Insurance)",
    definition:
      "Bảo hiểm cho rủi ro trong quá trình xây dựng công trình như tai nạn, hư hỏng.",
    category: "General",
  },
  {
    id: "g52",
    term: "Bảo hiểm vận tải (Transportation Insurance)",
    definition:
      "Bảo hiểm cho rủi ro trong vận chuyển hàng hóa, phương tiện vận tải.",
    category: "General",
  },
  {
    id: "g53",
    term: "Bảo hiểm hàng hải (Marine Insurance)",
    definition:
      "Bảo hiểm cho rủi ro trong vận chuyển đường biển như đắm tàu, mất hàng.",
    category: "General",
  },
  {
    id: "g54",
    term: "Bảo hiểm hàng không (Aviation Insurance)",
    definition:
      "Bảo hiểm cho rủi ro trong hoạt động hàng không như tai nạn máy bay.",
    category: "General",
  },
  {
    id: "g55",
    term: "Bảo hiểm không gian (Space Insurance)",
    definition:
      "Bảo hiểm cho rủi ro trong các hoạt động không gian như phóng vệ tinh.",
    category: "General",
  },
  {
    id: "g56",
    term: "Bảo hiểm mạng (Cyber Insurance)",
    definition:
      "Bảo hiểm cho rủi ro liên quan đến an ninh mạng như tấn công mạng, rò rỉ dữ liệu.",
    category: "General",
  },
  {
    id: "g57",
    term: "Bảo hiểm trí tuệ nhân tạo (AI Insurance)",
    definition: "Bảo hiểm cho rủi ro liên quan đến ứng dụng trí tuệ nhân tạo.",
    category: "General",
  },
  {
    id: "g58",
    term: "Bảo hiểm robot (Robotics Insurance)",
    definition:
      "Bảo hiểm cho rủi ro liên quan đến hoạt động của robot, tự động hóa.",
    category: "General",
  },
  {
    id: "g59",
    term: "Bảo hiểm drone (Drone Insurance)",
    definition:
      "Bảo hiểm cho rủi ro khi sử dụng drone như rơi, va chạm, xâm phạm quyền riêng tư.",
    category: "General",
  },
  {
    id: "g60",
    term: "Bảo hiểm chia sẻ (Sharing Economy Insurance)",
    definition:
      "Bảo hiểm cho các mô hình kinh tế chia sẻ như cho thuê nhà, xe chia sẻ.",
    category: "General",
  },
  {
    id: "g61",
    term: "Bảo hiểm thể thao (Sports Insurance)",
    definition:
      "Bảo hiểm cho rủi ro trong hoạt động thể thao như chấn thương, hủy sự kiện.",
    category: "General",
  },
  {
    id: "g62",
    term: "Bảo hiểm giải trí (Entertainment Insurance)",
    definition:
      "Bảo hiểm cho ngành giải trí như hủy concert, tai nạn khi quay phim.",
    category: "General",
  },
  {
    id: "g63",
    term: "Bảo hi�m nghệ thuật (Art Insurance)",
    definition:
      "Bảo hiểm cho tác phẩm nghệ thuật như tranh, tượng khỏi hư hại, mất cắp.",
    category: "General",
  },
  {
    id: "g64",
    term: "Bảo hiểm sưu tập (Collectibles Insurance)",
    definition:
      "Bảo hiểm cho các bộ sưu tập có giá trị như đồ cổ, tem, tiền xu.",
    category: "General",
  },
  {
    id: "g65",
    term: "Bảo hiểm thú cưng (Pet Insurance)",
    definition: "Bảo hiểm cho thú cưng như chó, mèo khỏi bệnh tật, tai nạn.",
    category: "General",
  },
  {
    id: "g66",
    term: "Bảo hiểm cây trồng (Crop Insurance)",
    definition: "Bảo hiểm cho cây trồng nông nghiệp khỏi thiên tai, sâu bệnh.",
    category: "General",
  },
  {
    id: "g67",
    term: "Bảo hiểm gia súc (Livestock Insurance)",
    definition: "Bảo hiểm cho vật nuôi như bò, lợn, gà khỏi dịch bệnh, chết.",
    category: "General",
  },
  {
    id: "g68",
    term: "Bảo hiểm thời tiết (Weather Insurance)",
    definition:
      "Bảo hiểm cho thiệt hại do thời tiết bất thường như mưa lớn, hạn hán.",
    category: "General",
  },
  {
    id: "g69",
    term: "Bảo hiểm động đất (Earthquake Insurance)",
    definition:
      "Bảo hiểm cho thiệt hại do động đất gây ra cho tài sản, công trình.",
    category: "General",
  },
  {
    id: "g70",
    term: "Bảo hiểm lũ lụt (Flood Insurance)",
    definition: "Bảo hiểm cho thiệt hại do lũ lụt gây ra cho nhà cửa, tài sản.",
    category: "General",
  },
  {
    id: "g71",
    term: "Thế quyền (Subrogation)",
    definition:
      "Quyền của công ty bảo hiểm đòi bên thứ ba bồi hoàn sau khi đã trả tiền bồi thường cho người được bảo hiểm.",
    category: "General",
  },
  {
    id: "g72",
    term: "Nguyên nhân gần (Proximate Cause)",
    definition:
      "Nguyên nhân chủ yếu, trực tiếp và hiệu lực nhất gây ra tổn thất, không nhất thiết là nguyên nhân đầu tiên hay cuối cùng.",
    category: "General",
  },
  {
    id: "g73",
    term: "Bảo hiểm trùng (Double Insurance)",
    definition:
      "Tình trạng một đối tượng được bảo hiểm bởi hai hay nhiều hợp đồng cho cùng một rủi ro và cùng một quyền lợi.",
    category: "General",
  },
  {
    id: "g74",
    term: "Tái bảo hiểm (Reinsurance)",
    definition:
      "Việc doanh nghiệp bảo hiểm chuyển nhượng một phần trách nhiệm đã nhận cho doanh nghiệp bảo hiểm khác để phân tán rủi ro.",
    category: "General",
  },
  {
    id: "g75",
    term: "Đồng bảo hiểm (Co-insurance)",
    definition:
      "Nhiều doanh nghiệp bảo hiểm cùng bảo hiểm cho một đối tượng theo một tỷ lệ nhất định trong cùng một hợp đồng.",
    category: "General",
  },
  {
    id: "g76",
    term: "Rủi ro đạo đức (Moral Hazard)",
    definition:
      "Sự gia tăng khả năng xảy ra tổn thất do tính không trung thực hoặc hành vi cố ý của người được bảo hiểm.",
    category: "General",
  },
  {
    id: "g77",
    term: "Rủi ro tinh thần (Morale Hazard)",
    definition:
      "Sự gia tăng rủi ro do sự lơ là, bất cẩn của người được bảo hiểm vì biết rằng mình đã có bảo hiểm.",
    category: "General",
  },
  {
    id: "g78",
    term: "Phí ngắn hạn (Short Rate Premium)",
    definition:
      "Mức phí áp dụng khi hợp đồng bảo hiểm bị hủy bỏ trước thời hạn bởi người mua bảo hiểm (thường cao hơn tỷ lệ tương ứng).",
    category: "General",
  },
  {
    id: "g79",
    term: "Phí theo tỷ lệ (Pro-rata Premium)",
    definition:
      "Cách tính phí hoàn lại dựa trên số ngày thực tế còn lại của hợp đồng khi hủy bỏ.",
    category: "General",
  },
  {
    id: "g80",
    term: "Giấy yêu cầu bảo hiểm (Proposal Form)",
    definition:
      "Văn bản do người mua bảo hiểm điền thông tin để làm cơ sở cho doanh nghiệp bảo hiểm đánh giá rủi ro.",
    category: "General",
  },
  {
    id: "g81",
    term: "Thời hạn cân nhắc (Free-look Period)",
    definition:
      "Khoảng thời gian (thường 21 ngày) sau khi nhận hợp đồng mà khách hàng có quyền từ chối tham gia và nhận lại phí.",
    category: "General",
  },
  {
    id: "g82",
    term: "Điều khoản trọng tài (Arbitration Clause)",
    definition:
      "Quy định về việc giải quyết tranh chấp thông qua trọng tài thương mại thay vì tòa án.",
    category: "General",
  },
  {
    id: "g83",
    term: "Bảo hiểm mọi rủi ro (All Risks)",
    definition:
      "Loại hình bảo hiểm bao gồm tất cả các rủi ro, trừ những rủi ro bị loại trừ cụ thể trong hợp đồng.",
    category: "General",
  },
  {
    id: "g84",
    term: "Tổn thất toàn bộ (Total Loss)",
    definition:
      "Khi tài sản bị phá hủy hoàn toàn hoặc chi phí sửa chữa vượt quá giá trị thực tế của tài sản.",
    category: "General",
  },
  {
    id: "g85",
    term: "Tổn thất bộ phận (Partial Loss)",
    definition:
      "Thiệt hại chỉ xảy ra với một phần tài sản và có thể sửa chữa được.",
    category: "General",
  },
  {
    id: "g86",
    term: "Biên khả năng thanh toán (Solvency Margin)",
    definition:
      "Chênh lệch giữa tài sản có và tài sản nợ, thước đo sức khỏe tài chính của công ty bảo hiểm.",
    category: "General",
  },
  {
    id: "g87",
    term: "Khai báo rủi ro (Risk Declaration)",
    definition:
      "Nghĩa vụ của bên mua bảo hiểm phải thông báo mọi tình tiết quan trọng ảnh hưởng đến rủi ro.",
    category: "General",
  },
  {
    id: "g88",
    term: "Người thẩm định (Underwriter)",
    definition:
      "Chuyên gia của công ty bảo hiểm chịu trách nhiệm đánh giá rủi ro và quyết định chấp nhận hay từ chối bảo hiểm.",
    category: "General",
  },
  {
    id: "g89",
    term: "Chuyên gia tính phí (Actuary)",
    definition:
      "Người sử dụng toán học và thống kê để tính toán mức phí bảo hiểm và dự phòng nghiệp vụ.",
    category: "General",
  },
  {
    id: "g90",
    term: "Phí quản lý (Administration Fee)",
    definition:
      "Khoản phí trích ra để chi trả cho chi phí vận hành doanh nghiệp bảo hiểm.",
    category: "General",
  },
  {
    id: "g91",
    term: "Hoa hồng môi giới (Brokerage Fee)",
    definition:
      "Khoản tiền doanh nghiệp bảo hiểm trả cho môi giới bảo hiểm khi thu xếp hợp đồng thành công.",
    category: "General",
  },
  {
    id: "g92",
    term: "Giấy chứng nhận tạm thời (Cover Note)",
    definition:
      "Văn bản xác nhận bảo hiểm tạm thời trong khi chờ phát hành đơn bảo hiểm chính thức.",
    category: "General",
  },
  {
    id: "g93",
    term: "Ngày đáo hạn (Maturity Date)",
    definition:
      "Ngày kết thúc hợp đồng bảo hiểm nhân thọ, khi công ty chi trả số tiền bảo hiểm đáo hạn.",
    category: "General",
  },
  {
    id: "g94",
    term: "Giá trị giải ước (Surrender Value)",
    definition:
      "Số tiền khách hàng nhận được khi chấm dứt hợp đồng nhân thọ trước hạn (tương tự giá trị hoàn lại).",
    category: "General",
  },
  {
    id: "g95",
    term: "Bảo hiểm nhóm (Fleet Policy)",
    definition:
      "Đơn bảo hiểm cấp chung cho một nhóm tài sản (ví dụ: đội xe) hoặc nhóm người.",
    category: "General",
  },
  {
    id: "g96",
    term: "Rủi ro hạt nhân (Nuclear Risk)",
    definition:
      "Rủi ro liên quan đến phóng xạ, hạt nhân - thường là điều khoản loại trừ tiêu chuẩn.",
    category: "General",
  },
  {
    id: "g97",
    term: "Bất khả kháng (Force Majeure)",
    definition:
      "Sự kiện khách quan không thể lường trước (thiên tai, chiến tranh) làm miễn trừ trách nhiệm.",
    category: "General",
  },
  {
    id: "g98",
    term: "Gian lận bảo hiểm (Insurance Fraud)",
    definition: "Hành vi cố ý lừa dối công ty bảo hiểm để trục lợi bất chính.",
    category: "General",
  },
  {
    id: "g99",
    term: "Luật kinh doanh bảo hiểm",
    definition:
      "Văn bản pháp luật cao nhất điều chỉnh hoạt động kinh doanh bảo hiểm tại Việt Nam.",
    category: "General",
  },
  {
    id: "g100",
    term: "Hiệp hội bảo hiểm (Insurance Association)",
    definition: "Tổ chức xã hội - nghề nghiệp của các doanh nghiệp bảo hiểm.",
    category: "General",
  },

  // --- Health / Sức khỏe --- (đã có 8, thêm 72 nữa)
  {
    id: "h1",
    term: "Thời gian chờ (Waiting Period)",
    definition:
      "Khoảng thời gian người được bảo hiểm chưa được chi trả quyền lợi (thường là 30 ngày với bệnh thường, 365 ngày với bệnh có sẵn).",
    category: "Health",
  },
  {
    id: "h2",
    term: "Bảo lãnh viện phí (Direct Billing)",
    definition:
      "Công ty bảo hiểm thanh toán trực tiếp cho bệnh viện, khách hàng không cần trả tiền trước.",
    category: "Health",
  },
  {
    id: "h3",
    term: "Điều trị nội trú (In-patient)",
    definition:
      "Việc bệnh nhân phải nhập viện và lưu lại qua đêm (thường tối thiểu 24h) để điều trị.",
    category: "Health",
  },
  {
    id: "h4",
    term: "Điều trị ngoại trú (Out-patient)",
    definition:
      "Việc khám và điều trị bệnh nhưng không cần nằm lại bệnh viện qua đêm.",
    category: "Health",
  },
  {
    id: "h5",
    term: "Bệnh có sẵn (Pre-existing Condition)",
    definition:
      "Tình trạng bệnh tật hoặc thương tật đã tồn tại trước ngày hiệu lực của hợp đồng bảo hiểm.",
    category: "Health",
  },
  {
    id: "h6",
    term: "Đồng chi trả (Co-payment)",
    definition:
      "Số tiền theo tỷ lệ phần trăm mà người được bảo hiểm và công ty bảo hiểm cùng chia sẻ chi trả.",
    category: "Health",
  },
  {
    id: "h7",
    term: "Thai sản (Maternity)",
    definition:
      "Quyền lợi chi trả cho các chi phí liên quan đến sinh nở, biến chứng thai sản và chăm sóc trẻ sơ sinh.",
    category: "Health",
  },
  {
    id: "h8",
    term: "Nha khoa (Dental Care)",
    definition:
      "Quyền lợi mở rộng chi trả cho việc khám, chữa răng, lấy cao răng (thường không bao gồm thẩm mỹ).",
    category: "Health",
  },
  {
    id: "h9",
    term: "Khám sức khỏe định kỳ (Periodic Health Check)",
    definition:
      "Quyền lợi chi trả cho việc khám sức khỏe tổng quát theo định kỳ hàng năm.",
    category: "Health",
  },
  {
    id: "h10",
    term: "Tiêm chủng (Vaccination)",
    definition:
      "Quyền lợi chi trả cho các loại vắc xin phòng bệnh theo độ tuổi và khuyến cáo y tế.",
    category: "Health",
  },
  {
    id: "h11",
    term: "Cấp cứu (Emergency)",
    definition:
      "Quyền lợi chi trả cho các chi phí điều trị cấp cứu do tai nạn hoặc bệnh đột ngột.",
    category: "Health",
  },
  {
    id: "h12",
    term: "Phẫu thuật (Surgery)",
    definition:
      "Quyền lợi chi trả cho các chi phí phẫu thuật, bao gồm phẫu thuật nội soi và mổ hở.",
    category: "Health",
  },
  {
    id: "h13",
    term: "Gây mê (Anesthesia)",
    definition:
      "Quyền lợi chi trả cho chi phí gây mê trong quá trình phẫu thuật hoặc thủ thuật.",
    category: "Health",
  },
  {
    id: "h14",
    term: "Vật lý trị liệu (Physiotherapy)",
    definition:
      "Quyền lợi chi trả cho các buổi vật lý trị liệu phục hồi chức năng sau điều trị.",
    category: "Health",
  },
  {
    id: "h15",
    term: "Xét nghiệm (Laboratory Tests)",
    definition:
      "Quyền lợi chi trả cho các xét nghiệm máu, nước tiểu, sinh thiết và các xét nghiệm chuyên sâu.",
    category: "Health",
  },
  {
    id: "h16",
    term: "Chẩn đoán hình ảnh (Diagnostic Imaging)",
    definition:
      "Quyền lợi chi trả cho X-quang, CT scan, MRI, siêu âm và các kỹ thuật chẩn đoán hình ảnh khác.",
    category: "Health",
  },
  {
    id: "h17",
    term: "Thuốc men (Medication)",
    definition:
      "Quyền lợi chi trả cho chi phí thuốc được kê đơn trong quá trình điều trị nội trú/ngoại trú.",
    category: "Health",
  },
  {
    id: "h18",
    term: "Máy trợ thính (Hearing Aids)",
    definition:
      "Quyền lợi chi trả cho thiết bị trợ thính trong trường hợp suy giảm thính lực.",
    category: "Health",
  },
  {
    id: "h19",
    term: "Kính mắt (Eyeglasses/Contact Lenses)",
    definition:
      "Quyền lợi chi trả cho kính mắt, kính áp tròng khi có vấn đề về thị lực.",
    category: "Health",
  },
  {
    id: "h20",
    term: "Điều trị ung thư (Cancer Treatment)",
    definition:
      "Quyền lợi chi trả cho hóa trị, xạ trị, điều trị nhắm trúng đích và các phương pháp điều trị ung thư.",
    category: "Health",
  },
  {
    id: "h21",
    term: "Ghép tạng (Organ Transplant)",
    definition:
      "Quyền lợi chi trả cho chi phí phẫu thuật ghép tạng và thuốc chống thải ghép.",
    category: "Health",
  },
  {
    id: "h22",
    term: "Điều trị HIV/AIDS",
    definition:
      "Quyền lợi chi trả cho thuốc kháng virus và các dịch vụ chăm sóc liên quan đến HIV/AIDS.",
    category: "Health",
  },
  {
    id: "h23",
    term: "Tâm thần (Mental Health)",
    definition:
      "Quyền lợi chi trả cho tư vấn tâm lý, điều trị rối loạn tâm thần và nghiện chất.",
    category: "Health",
  },
  {
    id: "h24",
    term: "Phục hồi chức năng (Rehabilitation)",
    definition:
      "Quyền lợi chi trả cho các dịch vụ phục hồi chức năng sau tai nạn, bệnh tật.",
    category: "Health",
  },
  {
    id: "h25",
    term: "Chăm sóc giảm nhẹ (Palliative Care)",
    definition:
      "Quyền lợi chi trả cho chăm sóc giảm đau, nâng cao chất lượng cuộc sống bệnh nhân giai đoạn cuối.",
    category: "Health",
  },
  {
    id: "h26",
    term: "Chăm sóc tại nhà (Home Care)",
    definition:
      "Quyền lợi chi trả cho dịch vụ y tế tại nhà như truyền dịch, thay băng, chăm sóc vết thương.",
    category: "Health",
  },
  {
    id: "h27",
    term: "Điều dưỡng (Nursing Care)",
    definition:
      "Quyền lợi chi trả cho dịch vụ chăm sóc điều dưỡng tại bệnh viện hoặc tại nhà.",
    category: "Health",
  },
  {
    id: "h28",
    term: "Thẩm mỹ sau ung thư (Post-cancer Reconstruction)",
    definition:
      "Quyền lợi chi trả cho phẫu thuật tái tạo sau điều trị ung thư như tái tạo vú.",
    category: "Health",
  },
  {
    id: "h29",
    term: "Điều trị vô sinh (Infertility Treatment)",
    definition:
      "Quyền lợi chi trả cho các phương pháp hỗ trợ sinh sản như thụ tinh trong ống nghiệm.",
    category: "Health",
  },
  {
    id: "h30",
    term: "Kiểm soát sinh sản (Contraception)",
    definition:
      "Quyền lợi chi trả cho các biện pháp tránh thai như đặt vòng, thuốc tránh thai.",
    category: "Health",
  },
  {
    id: "h31",
    term: "Sàng lọc di truyền (Genetic Screening)",
    definition:
      "Quyền lợi chi trả cho xét nghiệm sàng lọc các bệnh di truyền trước sinh hoặc đời sống.",
    category: "Health",
  },
  {
    id: "h32",
    term: "Y học cổ truyền (Traditional Medicine)",
    definition:
      "Quyền lợi chi trả cho châm cứu, bấm huyệt, thuốc Đông y trong điều trị.",
    category: "Health",
  },
  {
    id: "h33",
    term: "Thải độc (Detoxification)",
    definition:
      "Quyền lợi chi trả cho các liệu pháp thải độc cơ thể trong điều trị nghiện chất.",
    category: "Health",
  },
  {
    id: "h34",
    term: "Dinh dưỡng (Nutrition)",
    definition:
      "Quyền lợi chi trả cho tư vấn dinh dưỡng và các sản phẩm dinh dưỡng y tế đặc biệt.",
    category: "Health",
  },
  {
    id: "h35",
    term: "Thể dục trị liệu (Therapeutic Exercise)",
    definition:
      "Quyền lợi chi trả cho các chương trình tập luyện dưới sự hướng dẫn của chuyên gia.",
    category: "Health",
  },
  {
    id: "h36",
    term: "Thiền và yoga trị liệu (Meditation & Yoga Therapy)",
    definition:
      "Quyền lợi chi trả cho các lớp thiền, yoga trong quá trình điều trị căng thẳng, lo âu.",
    category: "Health",
  },
  {
    id: "h37",
    term: "Liệu pháp nghệ thuật (Art Therapy)",
    definition:
      "Quyền lợi chi trả cho các liệu pháp sử dụng nghệ thuật trong điều trị tâm lý.",
    category: "Health",
  },
  {
    id: "h38",
    term: "Liệu pháp âm nhạc (Music Therapy)",
    definition:
      "Quyền lợi chi trả cho các liệu pháp sử dụng âm nhạc trong phục hồi sức khỏe tinh thần.",
    category: "Health",
  },
  {
    id: "h39",
    term: "Liệu pháp mùi hương (Aromatherapy)",
    definition:
      "Quyền lợi chi trả cho các liệu pháp sử dụng tinh dầu trong giảm stress, cải thiện giấc ngủ.",
    category: "Health",
  },
  {
    id: "h40",
    term: "Thú y trị liệu (Pet Therapy)",
    definition:
      "Quyền lợi chi trả cho các liệu pháp sử dụng động vật trong hỗ trợ điều trị tâm lý.",
    category: "Health",
  },
  {
    id: "h41",
    term: "Cấy ghép thiết bị y tế (Medical Device Implant)",
    definition:
      "Quyền lợi chi trả cho cấy ghép máy tạo nhịp tim, máy khử rung, cấy ốc tai điện tử.",
    category: "Health",
  },
  {
    id: "h42",
    term: "Dịch vụ xe cứu thương (Ambulance Service)",
    definition:
      "Quyền lợi chi trả cho chi phí vận chuyển bằng xe cứu thương đến cơ sở y tế.",
    category: "Health",
  },
  {
    id: "h43",
    term: "Máy thở (Ventilator)",
    definition:
      "Quyền lợi chi trả cho chi phí thuê/sử dụng máy thở trong điều trị suy hô hấp.",
    category: "Health",
  },
  {
    id: "h44",
    term: "Lọc máu (Dialysis)",
    definition:
      "Quyền lợi chi trả cho chi phí lọc máu trong điều trị suy thận mãn tính.",
    category: "Health",
  },
  {
    id: "h45",
    term: "Truyền máu (Blood Transfusion)",
    definition:
      "Quyền lợi chi trả cho chi phí truyền máu và các chế phẩm từ máu.",
    category: "Health",
  },
  {
    id: "h46",
    term: "Sơ cứu (First Aid)",
    definition:
      "Quyền lợi chi trả cho chi phí sơ cứu ban đầu trước khi đến cơ sở y tế.",
    category: "Health",
  },
  {
    id: "h47",
    term: "Băng vết thương (Wound Dressing)",
    definition:
      "Quyền lợi chi trả cho vật tư y tế dùng để băng bó, chăm sóc vết thương.",
    category: "Health",
  },
  {
    id: "h48",
    term: "Vắc xin du lịch (Travel Vaccines)",
    definition:
      "Quyền lợi chi trả cho các loại vắc xin bắt buộc hoặc khuyến cáo khi đi du lịch nước ngoài.",
    category: "Health",
  },
  {
    id: "h49",
    term: "Khám tổng quát doanh nghiệp (Corporate Health Check)",
    definition:
      "Quyền lợi chi trả cho gói khám sức khỏe định kỳ cho nhân viên trong doanh nghiệp.",
    category: "Health",
  },
  {
    id: "h50",
    term: "Tư vấn sức khỏe trực tuyến (Online Health Consultation)",
    definition:
      "Quyền lợi chi trả cho dịch vụ tư vấn y tế từ xa qua điện thoại, video call.",
    category: "Health",
  },
  {
    id: "h51",
    term: "Quản lý bệnh mãn tính (Chronic Disease Management)",
    definition:
      "Quyền lợi chi trả cho các chương trình quản lý bệnh tiểu đường, tim mạch, huyết áp.",
    category: "Health",
  },
  {
    id: "h52",
    term: "Chương trình cai thuốc lá (Smoking Cessation Program)",
    definition:
      "Quyền lợi chi trả cho các liệu pháp hỗ trợ cai thuốc lá như tư vấn, thuốc.",
    category: "Health",
  },
  {
    id: "h53",
    term: "Chương trình giảm cân (Weight Loss Program)",
    definition:
      "Quyền lợi chi trả cho các chương trình giảm cân dưới sự giám sát y tế.",
    category: "Health",
  },
  {
    id: "h54",
    term: "Phòng ngừa bệnh tim mạch (Cardiovascular Disease Prevention)",
    definition:
      "Quyền lợi chi trả cho các xét nghiệm, tư vấn phòng ngừa bệnh tim mạch.",
    category: "Health",
  },
  {
    id: "h55",
    term: "Sàng lọc ung thư (Cancer Screening)",
    definition:
      "Quyền lợi chi trả cho các xét nghiệm sàng lọc ung thư vú, cổ tử cung, đại tràng.",
    category: "Health",
  },
  {
    id: "h56",
    term: "Sức khỏe sinh sản (Reproductive Health)",
    definition:
      "Quyền lợi chi trả cho các dịch vụ liên quan đến sức khỏe sinh sản nam và nữ.",
    category: "Health",
  },
  {
    id: "h57",
    term: "Sức khỏe tình dục (Sexual Health)",
    definition:
      "Quyền lợi chi trả cho tư vấn, xét nghiệm và điều trị các bệnh lây qua đường tình dục.",
    category: "Health",
  },
  {
    id: "h58",
    term: "Chăm sóc trẻ sơ sinh (Newborn Care)",
    definition:
      "Quyền lợi chi trả cho các dịch vụ chăm sóc y tế cho trẻ sơ sinh trong những ngày đầu đời.",
    category: "Health",
  },
  {
    id: "h59",
    term: "Chăm sóc trẻ em (Pediatric Care)",
    definition:
      "Quyền lợi chi trả cho các dịch vụ y tế dành riêng cho trẻ em từ sơ sinh đến tuổi vị thành niên.",
    category: "Health",
  },
  {
    id: "h60",
    term: "Chăm sóc thanh thiếu niên (Adolescent Care)",
    definition:
      "Quyền lợi chi trả cho các dịch vụ y tế phù hợp với đặc điểm tâm sinh lý tuổi dậy thì.",
    category: "Health",
  },
  {
    id: "h61",
    term: "Chăm sóc người lớn tuổi (Geriatric Care)",
    definition:
      "Quyền lợi chi trả cho các dịch vụ y tế chuyên biệt dành cho người cao tuổi.",
    category: "Health",
  },
  {
    id: "h62",
    term: "Chăm sóc cuối đời (End-of-Life Care)",
    definition:
      "Quyền lợi chi trả cho các dịch vụ chăm sóc y tế và hỗ trợ tinh thần trong giai đoạn cuối đời.",
    category: "Health",
  },
  {
    id: "h63",
    term: "Hiến tạng (Organ Donation)",
    definition:
      "Quyền lợi chi trả cho chi phí y tế liên quan đến việc hiến tạng sống hoặc hiến tạng sau khi chết.",
    category: "Health",
  },
  {
    id: "h64",
    term: "Ngân hàng máu (Blood Bank)",
    definition:
      "Quyền lợi chi trả cho chi phí liên quan đến việc hiến máu và tiếp nhận máu từ ngân hàng máu.",
    category: "Health",
  },
  {
    id: "h65",
    term: "Ngân hàng tế bào gốc (Stem Cell Bank)",
    definition:
      "Quyền lợi chi trả cho chi phí lưu trữ và sử dụng tế bào gốc dây rốn.",
    category: "Health",
  },
  {
    id: "h66",
    term: "Y học tái tạo (Regenerative Medicine)",
    definition:
      "Quyền lợi chi trả cho các liệu pháp sử dụng tế bào gốc trong điều trị bệnh.",
    category: "Health",
  },
  {
    id: "h67",
    term: "Y học cá nhân hóa (Personalized Medicine)",
    definition:
      "Quyền lợi chi trả cho các xét nghiệm di truyền để lựa chọn phương pháp điều trị phù hợp.",
    category: "Health",
  },
  {
    id: "h68",
    term: "Y học từ xa (Telemedicine)",
    definition:
      "Quyền lợi chi trả cho dịch vụ khám chữa bệnh từ xa qua các nền tảng công nghệ.",
    category: "Health",
  },
  {
    id: "h69",
    term: "Y học di động (Mobile Health)",
    definition:
      "Quyền lợi chi trả cho các ứng dụng sức khỏe trên điện thoại và thiết bị đeo thông minh.",
    category: "Health",
  },
  {
    id: "h70",
    term: "Y học dự phòng (Preventive Medicine)",
    definition:
      "Quyền lợi chi trả cho các biện pháp phòng ngừa bệnh tật trước khi chúng xảy ra.",
    category: "Health",
  },
  {
    id: "h71",
    term: "Y học lối sống (Lifestyle Medicine)",
    definition:
      "Quyền lợi chi trả cho các can thiệp về dinh dưỡng, tập luyện để phòng và điều trị bệnh.",
    category: "Health",
  },
  {
    id: "h72",
    term: "Y học tích hợp (Integrative Medicine)",
    definition:
      "Quyền lợi chi trả cho sự kết hợp giữa y học hiện đại và các liệu pháp bổ sung.",
    category: "Health",
  },
  {
    id: "h73",
    term: "Y học chức năng (Functional Medicine)",
    definition:
      "Quyền lợi chi trả cho các phương pháp điều trị tập trung vào nguyên nhân gốc rễ của bệnh.",
    category: "Health",
  },
  {
    id: "h74",
    term: "Y học môi trường (Environmental Medicine)",
    definition:
      "Quyền lợi chi trả cho điều trị các bệnh liên quan đến ô nhiễm môi trường.",
    category: "Health",
  },
  {
    id: "h75",
    term: "Y học nghề nghiệp (Occupational Medicine)",
    definition:
      "Quyền lợi chi trả cho điều trị các bệnh nghề nghiệp và chăm sóc sức khỏe người lao động.",
    category: "Health",
  },
  {
    id: "h76",
    term: "Y học thể thao (Sports Medicine)",
    definition:
      "Quyền lợi chi trả cho điều trị chấn thương thể thao và tối ưu hóa thành tích vận động.",
    category: "Health",
  },
  {
    id: "h77",
    term: "Y học hàng không (Aviation Medicine)",
    definition:
      "Quyền lợi chi trả cho chăm sóc sức khỏe phi công, tiếp viên hàng không và hành khách.",
    category: "Health",
  },
  {
    id: "h78",
    term: "Y học du lịch (Travel Medicine)",
    definition:
      "Quyền lợi chi trả cho tư vấn và điều trị các vấn đề sức khỏe liên quan đến du lịch.",
    category: "Health",
  },
  {
    id: "h79",
    term: "Y học thảm họa (Disaster Medicine)",
    definition:
      "Quyền lợi chi trả cho chăm sóc y tế trong và sau thảm họa thiên nhiên, sự cố lớn.",
    category: "Health",
  },
  {
    id: "h80",
    term: "Y học chiến tranh (War Medicine)",
    definition:
      "Quyền lợi chi trả cho chăm sóc y tế thương binh và nạn nhân chiến tranh.",
    category: "Health",
  },
  {
    id: "h81",
    term: "Nội soi (Endoscopy)",
    definition:
      "Thủ thuật y tế sử dụng ống soi để quan sát bên trong cơ thể, thường được bảo hiểm chi trả theo giới hạn.",
    category: "Health",
  },
  {
    id: "h82",
    term: "Ý kiến y tế thứ hai (Second Medical Opinion)",
    definition:
      "Quyền lợi được tư vấn bởi một chuyên gia y tế khác để xác nhận chẩn đoán và phác đồ điều trị.",
    category: "Health",
  },
  {
    id: "h83",
    term: "Phẫu thuật trong ngày (Day Surgery)",
    definition:
      "Phẫu thuật không cần nằm viện qua đêm nhưng vẫn được xem là điều trị nội trú ở một số gói bảo hiểm.",
    category: "Health",
  },
  {
    id: "h84",
    term: "Bệnh bẩm sinh (Congenital Condition)",
    definition:
      "Các dị tật hoặc bệnh lý tồn tại từ khi mới sinh, thường bị loại trừ hoặc có thời gian chờ rất dài.",
    category: "Health",
  },
  {
    id: "h85",
    term: "Thuốc gốc (Generic Drug)",
    definition:
      "Thuốc có cùng dược chất với thuốc biệt dược nhưng giá thành rẻ hơn, thường được ưu tiên chi trả.",
    category: "Health",
  },
  {
    id: "h86",
    term: "Thuốc biệt dược (Brand Name Drug)",
    definition:
      "Thuốc bản quyền của nhà phát minh, thường có giá cao hơn thuốc Generic.",
    category: "Health",
  },
  {
    id: "h87",
    term: "Thực phẩm chức năng (Supplements)",
    definition:
      "Sản phẩm hỗ trợ sức khỏe, vitamin, khoáng chất - thường thuộc điểm loại trừ của bảo hiểm sức khỏe.",
    category: "Health",
  },
  {
    id: "h88",
    term: "Phẫu thuật thẩm mỹ (Cosmetic Surgery)",
    definition:
      "Phẫu thuật làm đẹp không vì mục đích chữa bệnh - luôn thuộc điểm loại trừ.",
    category: "Health",
  },
  {
    id: "h89",
    term: "Biến chứng thai sản (Maternity Complications)",
    definition:
      "Các tình trạng bất thường nghiêm trọng trong thai kỳ (như thai ngoài tử cung, tiền sản giật) được bảo hiểm chi trả riêng.",
    category: "Health",
  },
  {
    id: "h90",
    term: "Phòng dịch vụ (Private Room)",
    definition:
      "Phòng bệnh đơn, tiêu chuẩn cao hơn phòng chung, được chi trả tùy theo hạn mức ngày giường.",
    category: "Health",
  },
  {
    id: "h91",
    term: "Khoa hồi sức tích cực (ICU)",
    definition:
      "Khu vực chăm sóc đặc biệt cho bệnh nhân nặng, thường có hạn mức chi trả cao hơn phòng thường.",
    category: "Health",
  },
  {
    id: "h92",
    term: "Trợ cấp mất giảm thu nhập (Cash Benefit)",
    definition:
      "Số tiền cố định chi trả cho mỗi ngày nằm viện để bù đắp thu nhập bị mất.",
    category: "Health",
  },
  {
    id: "h93",
    term: "Bác sĩ chuyên khoa (Specialist)",
    definition:
      "Bác sĩ có chứng chỉ chuyên sâu về một lĩnh vực (tim mạch, thần kinh...), phí khám thường cao hơn bác sĩ đa khoa.",
    category: "Health",
  },
  {
    id: "h94",
    term: "Giấy chuyển tuyến (Referral Letter)",
    definition:
      "Văn bản của bác sĩ đa khoa/cơ sở ban đầu giới thiệu bệnh nhân lên tuyến trên hoặc bác sĩ chuyên khoa.",
    category: "Health",
  },
  {
    id: "h95",
    term: "Bệnh mãn tính (Chronic Condition)",
    definition:
      "Bệnh kéo dài, không thể chữa khỏi hoàn toàn (tiểu đường, cao huyết áp), thường có giới hạn chi trả riêng.",
    category: "Health",
  },
  {
    id: "h96",
    term: "Bệnh cấp tính (Acute Condition)",
    definition:
      "Bệnh xuất hiện đột ngột, diễn tiến nhanh và cần điều trị ngay lập tức.",
    category: "Health",
  },
  {
    id: "h97",
    term: "Điều trị thay thế (Alternative Treatment)",
    definition:
      "Các phương pháp không thuộc y học phương tây (Homeopathy, Chiropractic) - chi trả hạn chế.",
    category: "Health",
  },
  {
    id: "h98",
    term: "Vận chuyển y tế khẩn cấp (Emergency Evacuation)",
    definition:
      "Dịch vụ đưa bệnh nhân từ nơi xảy ra sự cố đến cơ sở y tế phù hợp gần nhất (kể cả bằng trực thăng).",
    category: "Health",
  },
  {
    id: "h99",
    term: "Hồi hương thi hài (Repatriation of Mortal Remains)",
    definition:
      "Chi phí đưa thi hài người được bảo hiểm về quê hương/nơi cư trú trong trường hợp tử vong.",
    category: "Health",
  },
  {
    id: "h100",
    term: "Giới hạn trọn đời (Lifetime Limit)",
    definition:
      "Tổng số tiền tối đa mà bảo hiểm sẽ chi trả cho một khách hàng trong suốt cuộc đời của họ.",
    category: "Health",
  },
  {
    id: "h101",
    term: "Giới hạn theo năm (Annual Limit)",
    definition: "Số tiền tối đa bảo hiểm chi trả trong một năm hợp đồng.",
    category: "Health",
  },
  {
    id: "h102",
    term: "Bệnh đặc biệt (Special Disease)",
    definition:
      "Danh mục các bệnh như ung thư, u, sỏi, viêm xoang... thường có thời gian chờ 1 năm.",
    category: "Health",
  },
  {
    id: "h103",
    term: "Thẻ bảo hiểm điện tử (E-card)",
    definition:
      "Thẻ bảo hiểm trên ứng dụng di động, có giá trị tương đương thẻ cứng khi bảo lãnh viện phí.",
    category: "Health",
  },
  {
    id: "h104",
    term: "Hồ sơ bệnh án (Medical Record)",
    definition:
      "Tài liệu ghi chép toàn bộ quá trình khám chữa bệnh, là chứng từ quan trọng nhất khi bồi thường.",
    category: "Health",
  },
  {
    id: "h105",
    term: "Toa thuốc (Prescription)",
    definition:
      "Chỉ định thuốc của bác sĩ, phải có chữ ký, dấu mộc và phù hợp với chẩn đoán bệnh.",
    category: "Health",
  },
  {
    id: "h106",
    term: "Bảng kê chi tiết (Itemized Bill)",
    definition:
      "Danh sách liệt kê chi tiết từng khoản mục chi phí (thuốc, vật tư, dịch vụ) trong hóa đơn tổng.",
    category: "Health",
  },
  {
    id: "h107",
    term: "Điều trị răng (Dental Treatment)",
    definition:
      "Bao gồm trám răng, nhổ răng, chữa tủy, cạo vôi. Làm răng giả/thẩm mỹ thường bị loại trừ.",
    category: "Health",
  },
  {
    id: "h108",
    term: "Niềng răng (Orthodontics)",
    definition:
      "Chỉnh nha thẩm mỹ, đa số các gói bảo hiểm sức khỏe tiêu chuẩn đều loại trừ.",
    category: "Health",
  },
  {
    id: "h109",
    term: "Mổ Lasik",
    definition:
      "Phẫu thuật điều trị tật khúc xạ mắt, thường chỉ được bảo hiểm ở các gói cao cấp với thời gian chờ.",
    category: "Health",
  },
  {
    id: "h110",
    term: "Trợ cấp thai sản (Maternity Allowance)",
    definition:
      "Khoản tiền khoán chi trả cho việc sinh con, không phụ thuộc vào chi phí thực tế (ở một số loại hình).",
    category: "Health",
  },
  {
    id: "h111",
    term: "Chăm sóc trẻ sau sinh",
    definition: "Chi phí tắm bé, vệ sinh, chiếu đèn vàng da cho trẻ sơ sinh.",
    category: "Health",
  },
  {
    id: "h112",
    term: "Vật tư y tế tiêu hao",
    definition: "Bông, băng, gạc, kim tiêm sử dụng trong quá trình điều trị.",
    category: "Health",
  },
  {
    id: "h113",
    term: "Cấy ghép bộ phận cơ thể",
    definition:
      "Chi phí mua tạng (thường bị loại trừ), chỉ chi trả chi phí phẫu thuật cấy ghép cho người nhận.",
    category: "Health",
  },
  {
    id: "h114",
    term: "Lây nhiễm chéo (Cross Infection)",
    definition:
      "Việc lây bệnh từ bệnh nhân này sang bệnh nhân khác trong môi trường bệnh viện.",
    category: "Health",
  },
  {
    id: "h115",
    term: "Bệnh dịch hạch (Plague)",
    definition:
      "Một trong các bệnh truyền nhiễm nguy hiểm, thường được quy định cụ thể trong điều khoản loại trừ/bảo hiểm.",
    category: "Health",
  },
  {
    id: "h116",
    term: "Đại dịch (Pandemic)",
    definition:
      "Sự lây lan bệnh tật trên quy mô toàn cầu (như COVID-19). Việc chi trả phụ thuộc vào chính sách từng thời điểm.",
    category: "Health",
  },
  {
    id: "h117",
    term: "Cách ly y tế (Quarantine)",
    definition:
      "Việc cách ly để kiểm soát dịch bệnh. Chi phí ăn ở trong khu cách ly thường không được bảo hiểm y tế chi trả.",
    category: "Health",
  },
  {
    id: "h118",
    term: "Rối loạn giấc ngủ (Sleep Disorder)",
    definition:
      "Các bệnh lý liên quan đến giấc ngủ, thường bị loại trừ nếu không có nguyên nhân thực thể rõ ràng.",
    category: "Health",
  },
  {
    id: "h119",
    term: "Phẫu thuật robot (Robotic Surgery)",
    definition:
      "Kỹ thuật phẫu thuật cao cấp dùng cánh tay robot, chi phí cao và có thể bị giới hạn phụ.",
    category: "Health",
  },
  {
    id: "h120",
    term: "Dịch vụ xe lăn (Wheelchair Service)",
    definition:
      "Hỗ trợ di chuyển cho bệnh nhân khuyết tật hoặc chấn thương tại bệnh viện.",
    category: "Health",
  },
  // --- Car / Ô tô --- (đã có 5, thêm 45 nữa)
  {
    id: "c1",
    term: "Trách nhiệm dân sự bắt buộc",
    definition:
      "Bảo hiểm bồi thường cho bên thứ ba (người bị nạn) khi chủ xe gây tai nạn.",
    category: "Car",
  },
  {
    id: "c2",
    term: "Bảo hiểm vật chất xe",
    definition:
      "Bồi thường thiệt hại vật chất của xe do đâm, va, lật, đổ, cháy, nổ, hoặc thiên tai.",
    category: "Car",
  },
  {
    id: "c3",
    term: "Thủy kích",
    definition:
      "Hiện tượng nước tràn vào buồng đốt xi-lanh làm hỏng động cơ (thường xảy ra khi đi qua vùng ngập nước).",
    category: "Car",
  },
  {
    id: "c4",
    term: "Khấu hao thay mới",
    definition:
      "Việc giảm trừ số tiền bồi thường dựa trên thời gian đã sử dụng của phụ tùng cũ cần thay thế.",
    category: "Car",
  },
  {
    id: "c5",
    term: "Mất cắp bộ phận",
    definition:
      "Quyền lợi bồi thường khi xe bị mất cắp các bộ phận như gương, logo, bánh xe (thường giới hạn số lần/năm).",
    category: "Car",
  },
  {
    id: "c6",
    term: "Tai nạn người ngồi trên xe",
    definition:
      "Bồi thường thương tật hoặc tử vong cho người ngồi trên xe (không bao gồm tài xế) khi xảy ra tai nạn.",
    category: "Car",
  },
  {
    id: "c7",
    term: "Tai nạn tài xế",
    definition:
      "Bồi thường thương tật hoặc tử vong cho tài xế khi xảy ra tai nạn trong quá trình điều khiển xe.",
    category: "Car",
  },
  {
    id: "c8",
    term: "Trộm cắp toàn bộ xe",
    definition:
      "Bồi thường toàn bộ giá trị xe khi xe bị mất trộm và không thể tìm thấy sau thời gian quy định.",
    category: "Car",
  },
  {
    id: "c9",
    term: "Hỗ trợ trên đường",
    definition:
      "Dịch vụ hỗ trợ khi xe gặp sự cố trên đường như thay lốp, cấp điện, cấp nhiên liệu, kéo xe.",
    category: "Car",
  },
  {
    id: "c10",
    term: "Xe thay thế tạm thời",
    definition:
      "Cung cấp xe thay thế trong thời gian xe bị hỏng do tai nạn đang được sửa chữa.",
    category: "Car",
  },
  {
    id: "c11",
    term: "Bảo hiểm giá trị gia tăng (Agreed Value)",
    definition:
      "Bảo hiểm với số tiền bảo hiểm được thỏa thuận trước, không tính khấu hao khi tổn thất toàn bộ.",
    category: "Car",
  },
  {
    id: "c12",
    term: "Bảo hiểm giá trị thực tế (Actual Cash Value)",
    definition:
      "Bảo hiểm với số tiền bồi thường dựa trên giá trị thị trường của xe tại thời điểm xảy ra tổn thất.",
    category: "Car",
  },
  {
    id: "c13",
    term: "Miễn thường có khấu trừ (Compulsory Excess)",
    definition:
      "Mức khấu trừ bắt buộc mà chủ xe phải tự chịu trước khi được bồi thường.",
    category: "Car",
  },
  {
    id: "c14",
    term: "Miễn thường tự nguyện (Voluntary Excess)",
    definition:
      "Mức khấu trừ tự nguyện mà chủ xe chấp nhận để được giảm phí bảo hiểm.",
    category: "Car",
  },
  {
    id: "c15",
    term: "Giảm phí bảo hiểm (No Claim Discount/Bonus)",
    definition:
      "Mức giảm phí bảo hiểm cho năm tiếp theo nếu năm trước không có khiếu nại bồi thường.",
    category: "Car",
  },
  {
    id: "c16",
    term: "Điều khoản bảo hiểm bổ sung cho người lái trẻ (Young Driver)",
    definition:
      "Điều khoản áp dụng cho tài xế dưới 25 tuổi hoặc mới có bằng lái, thường có phí cao hơn.",
    category: "Car",
  },
  {
    id: "c17",
    term: "Bảo hiểm cho người lái có tên (Named Driver)",
    definition:
      "Bảo hiểm chỉ chi trả khi xe được điều khiển bởi những tài xế có tên trong hợp đồng.",
    category: "Car",
  },
  {
    id: "c18",
    term: "Bảo hiểm cho bất kỳ người lái nào (Any Driver)",
    definition:
      "Bảo hiểm chi trả bất kể ai điều khiển xe, với điều kiện người đó có bằng lái hợp lệ.",
    category: "Car",
  },
  {
    id: "c19",
    term: "Sử dụng xe cho mục đích thương mại (Commercial Use)",
    definition:
      "Bảo hiểm cho xe được sử dụng vào mục đích kinh doanh, vận chuyển hành khách/hàng hóa.",
    category: "Car",
  },
  {
    id: "c20",
    term: "Sử dụng xe cho mục đích cá nhân (Private Use)",
    definition:
      "Bảo hiểm cho xe chỉ được sử dụng vào mục đích cá nhân, gia đình, không kinh doanh.",
    category: "Car",
  },
  {
    id: "c21",
    term: "Bảo hiểm cho thuê xe (Rental Car Insurance)",
    definition:
      "Bảo hiểm dành cho xe cho thuê, thường bao gồm trách nhiệm với hành khách và tài sản thuê.",
    category: "Car",
  },
  {
    id: "c22",
    term: "Bảo hiểm xe mới (New Car Replacement)",
    definition:
      "Điều khoản thay thế xe bị tổn thất toàn bộ bằng xe mới cùng model trong vòng 1-2 năm đầu.",
    category: "Car",
  },
  {
    id: "c23",
    term: "Bảo hiểm lốp và vành xe (Tyre & Rim Insurance)",
    definition:
      "Bảo hiểm riêng cho lốp và vành xe khỏi hư hỏng do va chạm, đường xấu.",
    category: "Car",
  },
  {
    id: "c24",
    term: "Bảo hiểm kính chắn gió (Windscreen Cover)",
    definition:
      "Bảo hiểm riêng cho kính chắn gió, thường không tính khấu hao và không ảnh hưởng NCD.",
    category: "Car",
  },
  {
    id: "c25",
    term: "Bảo hiểm thiết bị âm thanh (Audio Equipment Cover)",
    definition:
      "Bảo hiểm cho hệ thống âm thanh lắp thêm trên xe bị mất cắp hoặc hư hỏng.",
    category: "Car",
  },
  {
    id: "c26",
    term: "Bảo hiểm phụ kiện (Accessories Cover)",
    definition:
      "Bảo hiểm cho các phụ kiện gắn thêm trên xe như giá nóc, camera hành trình.",
    category: "Car",
  },
  {
    id: "c27",
    term: "Bảo hiểm hàng hóa trên xe (Goods in Transit)",
    definition:
      "Bảo hiểm cho hàng hóa đang được vận chuyển trên xe bị hư hỏng do tai nạn.",
    category: "Car",
  },
  {
    id: "c28",
    term: "Bảo hiểm trách nhiệm chủ xe (Car Owner Liability)",
    definition:
      "Bảo hiểm cho trách nhiệm pháp lý của chủ xe đối với người thứ ba khi cho mượn xe.",
    category: "Car",
  },
  {
    id: "c29",
    term: "Bảo hiểm xe không lưu thông (Lay-up Policy)",
    definition:
      "Bảo hiểm cho xe không sử dụng trong thời gian dài, thường chỉ bảo hiểm cháy nổ, trộm cắp.",
    category: "Car",
  },
  {
    id: "c30",
    term: "Bảo hiểm xe cũ (Classic Car Insurance)",
    definition:
      "Bảo hiểm đặc biệt cho xe cổ, xe có giá trị sưu tầm, thường dựa trên giá trị thỏa thuận.",
    category: "Car",
  },
  {
    id: "c31",
    term: "Bảo hiểm xe điện (Electric Vehicle Insurance)",
    definition:
      "Bảo hiểm chuyên biệt cho xe điện, bao gồm pin, động cơ điện và các hệ thống đặc thù.",
    category: "Car",
  },
  {
    id: "c32",
    term: "Bảo hiểm xe tự lái (Autonomous Vehicle Insurance)",
    definition:
      "Bảo hiểm cho xe có khả năng tự lái, xác định trách nhiệm khi xảy ra tai nạn ở chế độ tự động.",
    category: "Car",
  },
  {
    id: "c33",
    term: "Bảo hiểm chia sẻ xe (Car Sharing Insurance)",
    definition:
      "Bảo hiểm cho mô hình chia sẻ xe, bảo vệ cả chủ xe và người thuê xe trong thời gian chia sẻ.",
    category: "Car",
  },
  {
    id: "c34",
    term: "Bảo hiểm theo km (Pay-as-you-drive Insurance)",
    definition:
      "Bảo hiểm tính phí dựa trên số km thực tế di chuyển, khuyến khích lái xe ít hơn.",
    category: "Car",
  },
  {
    id: "c35",
    term: "Bảo hiểm theo cách lái (Usage-based Insurance)",
    definition:
      "Bảo hiểm sử dụng thiết bị theo dõi hành vi lái xe (tốc độ, phanh, thời gian) để tính phí.",
    category: "Car",
  },
  {
    id: "c36",
    term: "Bảo hiểm xe không chủ (Uninsured Motorist Coverage)",
    definition:
      "Bảo thường cho thiệt hại của bạn khi bị tai nạn với xe không có bảo hiểm hoặc hit-and-run.",
    category: "Car",
  },
  {
    id: "c37",
    term: "Bảo hiểm thiệt hại tài sản công cộng (Public Property Damage)",
    definition:
      "Bồi thường thiệt hại gây ra cho tài sản công cộng như cột điện, biển báo, vỉa hè.",
    category: "Car",
  },
  {
    id: "c38",
    term: "Bảo hiểm trách nhiệm nghề nghiệp tài xế (Professional Driver Liability)",
    definition:
      "Bảo hiểm cho tài xế taxi, xe công nghệ về trách nhiệm nghề nghiệp với hành khách.",
    category: "Car",
  },
  {
    id: "c39",
    term: "Bảo hiểm bãi đậu xe (Parking Lot Insurance)",
    definition:
      "Bảo hiểm cho xe khi đậu trong bãi đậu xe công cộng hoặc tư nhân.",
    category: "Car",
  },
  {
    id: "c40",
    term: "Bảo hiểm xe đa phương tiện (Multi-vehicle Insurance)",
    definition:
      "Bảo hiểm cho nhiều xe dưới một hợp đồng, thường được giảm phí so với mua riêng lẻ.",
    category: "Car",
  },
  {
    id: "c41",
    term: "Bảo hiểm xe cho doanh nghiệp (Fleet Insurance)",
    definition:
      "Bảo hiểm cho đội xe của doanh nghiệp, thường bao gồm nhiều loại xe và mục đích sử dụng.",
    category: "Car",
  },
  {
    id: "c42",
    term: "Bảo hiểm rủi ro chính trị (Political Risk Insurance)",
    definition:
      "Bảo hiểm cho xe hoạt động ở khu vực có rủi ro chính trị cao như bạo loạn, khủng bố.",
    category: "Car",
  },
  {
    id: "c43",
    term: "Bảo hiểm rủi ro khủng bố (Terrorism Insurance)",
    definition:
      "Bảo hiểm cho thiệt hại do hành vi khủng bố gây ra cho xe và người ngồi trên xe.",
    category: "Car",
  },
  {
    id: "c44",
    term: "Bảo hiểm chiến tranh (War Risk Insurance)",
    definition:
      "Bảo hiểm cho xe hoạt động trong khu vực có chiến sự hoặc xung đột vũ trang.",
    category: "Car",
  },
  {
    id: "c45",
    term: "Bảo hiểm môi trường cho xe (Environmental Liability for Vehicles)",
    definition:
      "Bảo hiểm cho trách nhiệm môi trường khi xe gây ô nhiễm (rò rỉ dầu, hóa chất).",
    category: "Car",
  },
  {
    id: "c46",
    term: "Bảo hiểm trách nhiệm sản phẩm xe (Automotive Product Liability)",
    definition:
      "Bảo hiểm cho nhà sản xuất, nhập khẩu xe về trách nhiệm với sản phẩm có khuyết tật.",
    category: "Car",
  },
  {
    id: "c47",
    term: "Bảo hiểm thu hồi xe (Vehicle Recall Insurance)",
    definition:
      "Bảo hiểm cho chi phí thu hồi xe do lỗi sản xuất hoặc vi phạm tiêu chuẩn an toàn.",
    category: "Car",
  },
  {
    id: "c48",
    term: "Bảo hiểm mất doanh thu (Loss of Use)",
    definition:
      "Bồi thường doanh thu bị mất khi xe kinh doanh (taxi, xe tải) không thể hoạt động do tai nạn.",
    category: "Car",
  },
  {
    id: "c49",
    term: "Bảo hiểm phí tổn pháp lý (Legal Expenses Cover)",
    definition:
      "Bồi thường chi phí thuê luật sư, tòa án khi có tranh chấp liên quan đến tai nạn xe.",
    category: "Car",
  },
  {
    id: "c50",
    term: "Bảo hiểm trách nhiệm với hành khách (Passenger Liability)",
    definition:
      "Bảo hiểm trách nhiệm cụ thể với hành khách trên xe khi xảy ra tai nạn.",
    category: "Car",
  },
  {
    id: "c51",
    term: "Xe miễn thuế (Duty Free Vehicle)",
    definition:
      "Xe ô tô được nhập khẩu hoặc mua theo chế độ miễn thuế, giá trị bảo hiểm thường thấp hơn xe thường.",
    category: "Car",
  },
  {
    id: "c52",
    term: "Chế tài bảo hiểm (Penalty)",
    definition:
      "Việc giảm trừ số tiền bồi thường (10-50%) do chủ xe vi phạm nghĩa vụ (như không thông báo kịp thời).",
    category: "Car",
  },
  {
    id: "c53",
    term: "Xe tập lái",
    definition:
      "Xe dùng để đào tạo lái xe, rủi ro cao nên phí bảo hiểm thường cao hơn.",
    category: "Car",
  },
  {
    id: "c54",
    term: "Niên hạn sử dụng xe",
    definition:
      "Thời gian tối đa xe được phép lưu hành (xe tải 25 năm, xe khách 20 năm). Xe hết niên hạn không được bảo hiểm.",
    category: "Car",
  },
  {
    id: "c55",
    term: "Vùng hoạt động (Territorial Limits)",
    definition:
      "Phạm vi địa lý xe được bảo hiểm (thường là lãnh thổ Việt Nam). Mở rộng sang Lào/Campuchia cần mua thêm.",
    category: "Car",
  },
  {
    id: "c56",
    term: "Túi khí (Airbag)",
    definition:
      "Thiết bị an toàn bung ra khi va chạm. Chi phí thay túi khí rất cao nên thường bị kiểm tra kỹ khi bồi thường.",
    category: "Car",
  },
  {
    id: "c57",
    term: "Độ xe (Modification)",
    definition:
      "Việc thay đổi kết cấu, hình dáng xe so với thiết kế ban đầu. Nếu không khai báo, bảo hiểm có thể từ chối.",
    category: "Car",
  },
  {
    id: "c58",
    term: "Biên bản hiện trường (Police Report)",
    definition:
      "Văn bản do cảnh sát giao thông lập tại nơi xảy ra tai nạn, là chứng từ quan trọng nhất cho vụ tổn thất lớn.",
    category: "Car",
  },
  {
    id: "c59",
    term: "Lỗi hỗn hợp (Joint Fault)",
    definition:
      "Tai nạn do lỗi của cả hai bên. Bồi thường sẽ dựa trên tỷ lệ lỗi của từng bên.",
    category: "Car",
  },
  {
    id: "c60",
    term: "Điểm mù (Blind Spot)",
    definition:
      "Vùng không gian tài xế không quan sát được qua gương, nguyên nhân của nhiều vụ va chạm.",
    category: "Car",
  },
  {
    id: "c61",
    term: "Nồng độ cồn (Alcohol Concentration)",
    definition:
      "Lượng cồn trong máu/hơi thở. Nếu vượt mức 0 (theo luật VN hiện hành), bảo hiểm từ chối bồi thường 100%.",
    category: "Car",
  },
  {
    id: "c62",
    term: "Giấy phép lái xe hợp lệ",
    definition:
      "Bằng lái đúng hạng, còn hạn sử dụng và không bị tước quyền sử dụng tại thời điểm tai nạn.",
    category: "Car",
  },
  {
    id: "c63",
    term: "Đăng kiểm (Vehicle Inspection)",
    definition:
      "Giấy chứng nhận an toàn kỹ thuật. Xe hết hạn đăng kiểm khi gặp tai nạn sẽ bị từ chối bảo hiểm.",
    category: "Car",
  },
  {
    id: "c64",
    term: "Kích bình (Jump Start)",
    definition: "Dịch vụ hỗ trợ khởi động xe khi ắc quy bị yếu hoặc chết.",
    category: "Car",
  },
  {
    id: "c65",
    term: "Kéo xe (Towing)",
    definition:
      "Dịch vụ cẩu/kéo xe về gara khi xe không thể tự di chuyển do tai nạn hoặc hỏng hóc.",
    category: "Car",
  },
  {
    id: "c66",
    term: "Phim cách nhiệt (Window Tint)",
    definition:
      "Lớp phim dán kính. Nếu bị vỡ kính, bảo hiểm thường chi trả cả chi phí dán lại phim nếu có khai báo.",
    category: "Car",
  },
  {
    id: "c67",
    term: "Camera hành trình (Dashcam)",
    definition:
      "Thiết bị ghi hình lái xe, là bằng chứng quan trọng để xác định nguyên nhân và lỗi trong tai nạn.",
    category: "Car",
  },
  {
    id: "c68",
    term: "Vết xước dăm (Scratch)",
    definition:
      "Các vết trầy xước nhẹ trên sơn xe, thường được gom lại làm một vụ sơn tút (có thể tính miễn thường/vụ).",
    category: "Car",
  },
  {
    id: "c69",
    term: "Sơn quây (Full Body Paint)",
    definition:
      "Việc sơn lại toàn bộ xe. Bảo hiểm thường không chi trả sơn quây trừ khi tai nạn làm hỏng toàn bộ vỏ xe.",
    category: "Car",
  },
  {
    id: "c70",
    term: "Gara chính hãng (Authorized Workshop)",
    definition:
      "Xưởng sửa chữa ủy quyền của hãng xe, giá thành cao hơn gara ngoài.",
    category: "Car",
  },
  {
    id: "c71",
    term: "Gara liên kết (Network Garage)",
    definition:
      "Các gara có ký hợp đồng bảo lãnh thanh toán với công ty bảo hiểm.",
    category: "Car",
  },
  {
    id: "c72",
    term: "Tổn thất ước tính (Estimated Loss)",
    definition: "Giá trị thiệt hại dự kiến do gara báo giá trước khi sửa chữa.",
    category: "Car",
  },
  {
    id: "c73",
    term: "Duyệt giá (Approval)",
    definition:
      "Bước công ty bảo hiểm đồng ý với báo giá sửa chữa của gara để bắt đầu sửa.",
    category: "Car",
  },
  {
    id: "c74",
    term: "Xe sang (Luxury Car)",
    definition:
      "Các dòng xe cao cấp (Mercedes, BMW...) thường có mức phí và mức miễn thường cao hơn.",
    category: "Car",
  },
  {
    id: "c75",
    term: "Chở quá tải (Overloading)",
    definition:
      "Xe chở hàng hóa vượt quá trọng tải thiết kế. Tai nạn xảy ra trong tình trạng này sẽ bị chế tài.",
    category: "Car",
  },
  {
    id: "c76",
    term: "Chở quá số người (Overcrowding)",
    definition:
      "Xe chở quá số người quy định. Bảo hiểm TNDS vẫn chi trả cho bên thứ 3, nhưng vật chất xe có thể bị chế tài.",
    category: "Car",
  },
  {
    id: "c77",
    term: "Đường cấm (Prohibited Road)",
    definition:
      "Đường xe không được phép đi vào (đường ngược chiều, đường cấm tải). Đi vào đây gặp nạn sẽ bị từ chối.",
    category: "Car",
  },
  {
    id: "c78",
    term: "Đua xe (Racing)",
    definition:
      "Hành vi đua xe trái phép là điểm loại trừ tuyệt đối trong mọi đơn bảo hiểm xe.",
    category: "Car",
  },
  {
    id: "c79",
    term: "Cháy nổ kỹ thuật",
    definition:
      "Xe tự bốc cháy do chập điện hoặc lỗi kỹ thuật, không phải do tác động bên ngoài.",
    category: "Car",
  },
  {
    id: "c80",
    term: "Mất chìa khóa (Key Loss)",
    definition:
      "Quyền lợi chi trả chi phí làm lại chìa khóa xe (smartkey) khi bị mất cắp hoặc thất lạc.",
    category: "Car",
  },

  // --- Life / Nhân thọ --- (đã có 4, thêm 36 nữa)
  {
    id: "l1",
    term: "Giá trị hoàn lại (Cash Value)",
    definition:
      "Số tiền bên mua nhận được khi chấm dứt hợp đồng bảo hiểm nhân thọ trước thời hạn.",
    category: "Life",
  },
  {
    id: "l2",
    term: "Thời gian gia hạn đóng phí (Grace Period)",
    definition:
      "Khoảng thời gian (thường 60 ngày) khách hàng chậm đóng phí nhưng hợp đồng vẫn có hiệu lực.",
    category: "Life",
  },
  {
    id: "l3",
    term: "Bảo tức",
    definition:
      "Khoản lãi chia thêm cho chủ hợp đồng từ kết quả đầu tư của quỹ chủ hợp đồng tham gia chia lãi.",
    category: "Life",
  },
  {
    id: "l4",
    term: "Sản phẩm bổ trợ (Rider)",
    definition:
      "Các gói bảo hiểm mua kèm (như tai nạn, bệnh hiểm nghèo) để gia tăng quyền lợi bảo vệ.",
    category: "Life",
  },
  {
    id: "l5",
    term: "Bảo hiểm sinh kỳ (Annuity)",
    definition:
      "Sản phẩm bảo hiểm trả thu nhập định kỳ cho người được bảo hiểm khi còn sống đến một độ tuổi nhất định.",
    category: "Life",
  },
  {
    id: "l6",
    term: "Bảo hiểm tử kỳ (Term Life)",
    definition:
      "Bảo hiểm nhân thọ có thời hạn, chỉ chi trả quyền lợi tử vong nếu sự kiện xảy ra trong thời hạn hợp đồng.",
    category: "Life",
  },
  {
    id: "l7",
    term: "Bảo hiểm trọn đời (Whole Life)",
    definition:
      "Bảo hiểm nhân thọ có hiệu lực suốt đời người được bảo hiểm, tích lũy giá trị tiết kiệm.",
    category: "Life",
  },
  {
    id: "l8",
    term: "Bảo hiểm hỗn hợp (Endowment)",
    definition:
      "Kết hợp bảo vệ tử vong và tiết kiệm, chi trả số tiền bảo hiểm khi đáo hạn hoặc tử vong.",
    category: "Life",
  },
  {
    id: "l9",
    term: "Bảo hiểm liên kết đầu tư (Investment-linked Insurance)",
    definition:
      "Bảo hiểm nhân thọ kết hợp đầu tư, giá trị hợp đồng phụ thuộc vào hiệu quả đầu tư của quỹ.",
    category: "Life",
  },
  {
    id: "l10",
    term: "Bảo hiểm liên kết chung (Unit-linked Insurance)",
    definition:
      "Tương tự bảo hiểm liên kết đầu tư, phí bảo hiểm được dùng để mua các đơn vị quỹ đầu tư.",
    category: "Life",
  },
  {
    id: "l11",
    term: "Bảo hiểm trả tiền định kỳ (Regular Payment Plan)",
    definition:
      "Bảo hiểm chi trả quyền lợi theo định kỳ (tháng, quý, năm) thay vì một lần duy nhất.",
    category: "Life",
  },
  {
    id: "l12",
    term: "Bảo hiểm hưu trí (Pension Insurance)",
    definition:
      "Bảo hiểm tích lũy cho tuổi già, chi trả thu nhập hưu trí khi đến tuổi nghỉ hưu.",
    category: "Life",
  },
  {
    id: "l13",
    term: "Bảo hiểm giáo dục (Education Insurance)",
    definition:
      "Bảo hiểm đảm bảo tài chính cho việc học tập của con cái, chi trả khi đến tuổi đi học.",
    category: "Life",
  },
  {
    id: "l14",
    term: "Bảo hiểm hôn nhân (Marriage Insurance)",
    definition:
      "Bảo hiểm tích lũy cho đám cưới, chi trả khi người được bảo hiểm kết hôn.",
    category: "Life",
  },
  {
    id: "l15",
    term: "Bảo hiểm thai sản nhân thọ (Maternity Life Insurance)",
    definition:
      "Bảo hiểm kết hợp bảo vệ thai sản và tích lũy cho em bé, chi trả khi sinh con.",
    category: "Life",
  },
  {
    id: "l16",
    term: "Bảo hiểm bệnh hiểm nghèo (Critical Illness Insurance)",
    definition:
      "Bảo hiểm chi trả một lần khi người được bảo hiểm được chẩn đoán mắc bệnh hiểm nghèo trong danh mục.",
    category: "Life",
  },
  {
    id: "l17",
    term: "Bảo hiểm tai nạn cá nhân (Personal Accident Insurance)",
    definition:
      "Bảo hiểm chi trả khi người được bảo hiểm bị thương tật hoặc tử vong do tai nạn.",
    category: "Life",
  },
  {
    id: "l18",
    term: "Bảo hiểm nằm viện (Hospitalization Insurance)",
    definition:
      "Bảo hiểm chi trả phụ cấp nằm viện theo số ngày nằm viện do bệnh tật hoặc tai nạn.",
    category: "Life",
  },
  {
    id: "l19",
    term: "Bảo hiểm phẫu thuật (Surgical Insurance)",
    definition:
      "Bảo hiểm chi trả theo danh mục phẫu thuật khi người được bảo hiểm phải phẫu thuật.",
    category: "Life",
  },
  {
    id: "l20",
    term: "Bảo hiểm thương tật bộ phận vĩnh viễn (Permanent Partial Disability)",
    definition:
      "Bảo hiểm chi trả theo tỷ lệ thương tật khi người được bảo hiểm bị mất hoặc suy giảm chức năng vĩnh viễn một bộ phận.",
    category: "Life",
  },
  {
    id: "l21",
    term: "Bảo hiểm thương tật toàn bộ vĩnh viễn (Permanent Total Disability)",
    definition:
      "Bảo hiểm chi trả toàn bộ số tiền bảo hiểm khi người được bảo hiểm bị mất khả năng lao động vĩnh viễn.",
    category: "Life",
  },
  {
    id: "l22",
    term: "Bảo hiểm mất thu nhập (Loss of Income Insurance)",
    definition:
      "Bảo hiểm chi trả thu nhập thay thế khi người được bảo hiểm không thể làm việc do bệnh tật/tai nạn.",
    category: "Life",
  },
  {
    id: "l23",
    term: "Bảo hiểm chăm sóc dài hạn (Long-term Care Insurance)",
    definition:
      "Bảo hiểm chi trả chi phí chăm sóc y tế dài hạn khi người được bảo hiểm mất khả năng tự chăm sóc.",
    category: "Life",
  },
  {
    id: "l24",
    term: "Bảo hiểm hỗ trợ tài chính người thân (Family Income Benefit)",
    definition:
      "Bảo hiểm chi trả thu nhập định kỳ cho gia đình khi người được bảo hiểm tử vong.",
    category: "Life",
  },
  {
    id: "l25",
    term: "Bảo hiểm trả nợ (Credit Life Insurance)",
    definition:
      "Bảo hiểm đảm bảo trả nợ vay ngân hàng khi người được bảo hiểm tử vong hoặc mất khả năng lao động.",
    category: "Life",
  },
  {
    id: "l26",
    term: "Bảo hiểm doanh nghiệp (Business Insurance)",
    definition:
      "Bảo hiểm bảo vệ doanh nghiệp khỏi rủi ro tử vong hoặc mất khả năng lao động của chủ sở hữu/đối tác chủ chốt.",
    category: "Life",
  },
  {
    id: "l27",
    term: "Bảo hiểm nhân viên (Employee Benefits Insurance)",
    definition:
      "Bảo hiểm nhóm cung cấp quyền lợi bảo hiểm cho nhân viên như tử vong, tai nạn, bệnh hiểm nghèo.",
    category: "Life",
  },
  {
    id: "l28",
    term: "Bảo hiểm nhóm (Group Insurance)",
    definition:
      "Bảo hiểm cho một nhóm người (nhân viên, hội viên) với điều kiện và phí ưu đãi hơn cá nhân.",
    category: "Life",
  },
  {
    id: "l29",
    term: "Bảo hiểm vi mô nhân thọ (Micro Life Insurance)",
    definition:
      "Bảo hiểm nhân thọ có phí thấp, quyền lợi cơ bản, dành cho người thu nhập thấp.",
    category: "Life",
  },
  {
    id: "l30",
    term: "Bảo hiểm số nhân thọ (Digital Life Insurance)",
    definition:
      "Bảo hiểm nhân thọ được mua và quản lý hoàn toàn trực tuyến, không cần giấy tờ.",
    category: "Life",
  },
  {
    id: "l31",
    term: "Bảo hiểm theo sự kiện (Event-based Insurance)",
    definition:
      "Bảo hiểm nhân thọ kích hoạt theo sự kiện cụ thể như kết hôn, sinh con, mua nhà.",
    category: "Life",
  },
  {
    id: "l32",
    term: "Bảo hiểm linh hoạt (Flexible Premium Insurance)",
    definition:
      "Bảo hiểm cho phép điều chỉnh số phí, số tiền bảo hiểm theo nhu cầu thay đổi của khách hàng.",
    category: "Life",
  },
  {
    id: "l33",
    term: "Bảo hiểm có thể tái đầu tư (Reinvestment Option)",
    definition:
      "Quyền lợi cho phép tái đầu tư cổ tức, lãi suất vào hợp đồng để tăng giá trị tích lũy.",
    category: "Life",
  },
  {
    id: "l34",
    term: "Bảo hiểm có thể chuyển đổi (Convertible Insurance)",
    definition:
      "Bảo hiểm cho phép chuyển đổi từ hợp đồng ngắn hạn sang dài hạn mà không cần thẩm định sức khỏe.",
    category: "Life",
  },
  {
    id: "l35",
    term: "Bảo hiểm có thể gia hạn (Renewable Insurance)",
    definition:
      "Bảo hiểm cho phép gia hạn hợp đồng khi hết hạn mà không cần thẩm định sức khỏe.",
    category: "Life",
  },
  {
    id: "l36",
    term: "Bảo hiểm có thể tăng giảm số tiền bảo hiểm (Adjustable Benefit Insurance)",
    definition:
      "Bảo hiểm cho phép tăng hoặc giảm số tiền bảo hiểm theo nhu cầu tài chính thay đổi.",
    category: "Life",
  },
  {
    id: "l37",
    term: "Bảo hiểm có thể vay tiền (Policy Loan)",
    definition:
      "Quyền lợi cho phép vay tiền từ giá trị hoàn lại của hợp đồng với lãi suất ưu đãi.",
    category: "Life",
  },
  {
    id: "l38",
    term: "Bảo hiểm có thể rút tiền (Partial Withdrawal)",
    definition:
      "Quyền lợi cho phép rút một phần giá trị hoàn lại của hợp đồng trước thời hạn.",
    category: "Life",
  },
  {
    id: "l39",
    term: "Bảo hiểm miễn đóng phí (Waiver of Premium)",
    definition:
      "Điều khoản miễn đóng phí khi người được bảo hiểm bị thương tật toàn bộ vĩnh viễn hoặc bệnh hiểm nghèo.",
    category: "Life",
  },
  {
    id: "l40",
    term: "Bảo hiểm tăng quyền lợi (Accelerated Benefit)",
    definition:
      "Quyền lợi cho phép nhận trước một phần số tiền bảo hiểm khi được chẩn đoán bệnh hiểm nghèo giai đoạn cuối.",
    category: "Life",
  },
  {
    id: "l41",
    term: "Định phí (Pricing)",
    definition:
      "Quá trình xác định mức phí bảo hiểm phù hợp với rủi ro và chi phí.",
    category: "Life",
  },
  {
    id: "l42",
    term: "Quỹ dự phòng (Reserve)",
    definition:
      "Khoản tiền công ty bảo hiểm phải trích lập để đảm bảo khả năng chi trả trong tương lai.",
    category: "Life",
  },
  {
    id: "l43",
    term: "Lãi suất cam kết (Guaranteed Interest Rate)",
    definition:
      "Mức lãi suất tối thiểu mà công ty bảo hiểm cam kết trả cho khách hàng trong sản phẩm liên kết chung.",
    category: "Life",
  },
  {
    id: "l44",
    term: "Lãi suất minh họa (Illustrative Interest Rate)",
    definition:
      "Mức lãi suất giả định dùng để minh họa dòng tiền, không phải là cam kết.",
    category: "Life",
  },
  {
    id: "l45",
    term: "Đơn vị quỹ (Fund Unit)",
    definition:
      "Đơn vị đo lường giá trị đầu tư trong bảo hiểm liên kết đơn vị.",
    category: "Life",
  },
  {
    id: "l46",
    term: "Giá đơn vị quỹ (Unit Price)",
    definition: "Giá trị của một đơn vị quỹ tại thời điểm định giá.",
    category: "Life",
  },
  {
    id: "l47",
    term: "Phí ban đầu (Initial Charge)",
    definition:
      "Khoản phí được khấu trừ từ phí bảo hiểm trước khi phân bổ vào tài khoản đầu tư.",
    category: "Life",
  },
  {
    id: "l48",
    term: "Phí rủi ro (Cost of Insurance)",
    definition:
      "Khoản phí khấu trừ hàng tháng để chi trả cho quyền lợi bảo vệ (tử vong, thương tật).",
    category: "Life",
  },
  {
    id: "l49",
    term: "Phí quản lý quỹ (Fund Management Fee)",
    definition: "Phí trả cho công ty quản lý quỹ đầu tư.",
    category: "Life",
  },
  {
    id: "l50",
    term: "Khôi phục hiệu lực (Reinstatement)",
    definition:
      "Quy trình làm cho hợp đồng có hiệu lực trở lại sau khi bị mất hiệu lực do không đóng phí.",
    category: "Life",
  },
  {
    id: "l51",
    term: "Người được bảo hiểm bổ sung (Secondary Insured)",
    definition:
      "Người thân (vợ/chồng/con) được mua kèm bảo hiểm trong cùng hợp đồng với người chính.",
    category: "Life",
  },
  {
    id: "l52",
    term: "Quyền lợi đáo hạn (Maturity Benefit)",
    definition: "Số tiền nhận được khi kết thúc thời hạn hợp đồng.",
    category: "Life",
  },
  {
    id: "l53",
    term: "Thẩm định sơ bộ (Pre-underwriting)",
    definition:
      "Việc đánh giá sơ bộ sức khỏe/tài chính trước khi nộp hồ sơ chính thức.",
    category: "Life",
  },
  {
    id: "l54",
    term: "Khám sức khỏe thẩm định (Medical Exam)",
    definition:
      "Yêu cầu khách hàng đi khám sức khỏe tại phòng khám chỉ định để đánh giá rủi ro.",
    category: "Life",
  },
  {
    id: "l55",
    term: "Tăng phí (Loading)",
    definition:
      "Việc áp dụng mức phí cao hơn chuẩn do khách hàng có rủi ro sức khỏe hoặc nghề nghiệp cao.",
    category: "Life",
  },
  {
    id: "l56",
    term: "Loại trừ riêng (Specific Exclusion)",
    definition:
      "Điều khoản loại trừ cụ thể đối với một tình trạng bệnh lý của riêng khách hàng đó.",
    category: "Life",
  },
  {
    id: "l57",
    term: "Hoãn bảo hiểm (Postponement)",
    definition:
      "Quyết định tạm thời chưa nhận bảo hiểm, chờ đánh giá lại sau một thời gian (ví dụ 6 tháng).",
    category: "Life",
  },
  {
    id: "l58",
    term: "Từ chối bảo hiểm (Decline)",
    definition: "Quyết định không nhận bảo hiểm do rủi ro quá cao.",
    category: "Life",
  },
  {
    id: "l59",
    term: "Tuổi bảo hiểm (Insurance Age)",
    definition:
      "Tuổi của người được bảo hiểm tính theo sinh nhật vừa qua hoặc sinh nhật gần nhất.",
    category: "Life",
  },
  {
    id: "l60",
    term: "Chuyển nhượng hợp đồng (Assignment)",
    definition:
      "Việc chuyển giao quyền sở hữu hợp đồng bảo hiểm cho người khác (tặng cho, thừa kế).",
    category: "Life",
  },
  // --- Travel / Du lịch --- (đã có 3, thêm 27 nữa)
  {
    id: "t1",
    term: "Hủy chuyến đi",
    definition:
      "Bồi thường các chi phí đặt cọc, vé máy bay không hoàn lại khi chuyến đi bị hủy do lý do bất khả kháng.",
    category: "Travel",
  },
  {
    id: "t2",
    term: "Thất lạc hành lý",
    definition:
      "Bồi thường chi phí mua vật dụng thiết yếu khi hành lý bị thất lạc quá số giờ quy định.",
    category: "Travel",
  },
  {
    id: "t3",
    term: "Vận chuyển y tế cấp cứu",
    definition:
      "Dịch vụ đưa người được bảo hiểm đến cơ sở y tế gần nhất hoặc về nước trong tình trạng nguy kịch.",
    category: "Travel",
  },
  {
    id: "t4",
    term: "Trì hoãn chuyến đi",
    definition:
      "Bồi thường chi phí ăn ở, đi lại khi chuyến bay bị hoãn quá số giờ quy định.",
    category: "Travel",
  },
  {
    id: "t5",
    term: "Hoàn trả vé máy bay (Flight Ticket Refund)",
    definition:
      "Bồi thường giá trị vé máy bay không sử dụng được do bệnh tật, tai nạn đột ngột.",
    category: "Travel",
  },
  {
    id: "t6",
    term: "Bảo hiểm tai nạn du lịch (Travel Accident Insurance)",
    definition:
      "Bảo hiểm chi trả khi người được bảo hiểm bị thương tật hoặc tử vong do tai nạn trong chuyến đi.",
    category: "Travel",
  },
  {
    id: "t7",
    term: "Bảo hiểm y tế du lịch (Travel Medical Insurance)",
    definition:
      "Bảo hiểm chi trả chi phí khám chữa bệnh, cấp cứu khi bị bệnh/tai nạn trong chuyến đi.",
    category: "Travel",
  },
  {
    id: "t8",
    term: "Bảo hiểm nha khoa khẩn cấp (Emergency Dental Care)",
    definition:
      "Bảo hiểm chi trả chi phí điều trị nha khoa khẩn cấp trong chuyến du lịch.",
    category: "Travel",
  },
  {
    id: "t9",
    term: "Bảo hiểm trợ giúp pháp lý (Legal Assistance)",
    definition:
      "Dịch vụ hỗ trợ pháp lý, thuê luật sư khi gặp rắc rối pháp luật ở nước ngoài.",
    category: "Travel",
  },
  {
    id: "t10",
    term: "Bảo hiểm trách nhiệm cá nhân (Personal Liability)",
    definition:
      "Bảo hiểm bồi thường thiệt hại vô ý gây ra cho người thứ ba hoặc tài sản của họ trong chuyến đi.",
    category: "Travel",
  },
  {
    id: "t11",
    term: "Bảo hiểm mất hộ chiếu (Passport Loss)",
    definition:
      "Bồi thường chi phí làm lại hộ chiếu và các giấy tờ tùy thân bị mất trong chuyến đi.",
    category: "Travel",
  },
  {
    id: "t12",
    term: "Bảo hiểm trộm cắp tiền mặt (Cash Theft)",
    definition:
      "Bồi thường một phần số tiền mặt bị mất cắp trong chuyến du lịch.",
    category: "Travel",
  },
  {
    id: "t13",
    term: "Bảo hiểm hủy tour (Tour Cancellation)",
    definition:
      "Bồi thường chi phí đặt tour du lịch trọn gói khi hủy chuyến do lý do được bảo hiểm.",
    category: "Travel",
  },
  {
    id: "t14",
    term: "Bảo hiểm cắt ngắn chuyến đi (Trip Curtailment)",
    definition:
      "Bồi thường chi phí về nước sớm khi buộc phải kết thúc chuyến đi sớm do lý do được bảo hiểm.",
    category: "Travel",
  },
  {
    id: "t15",
    term: "Bảo hiểm mất kết nối chuyến bay (Missed Connection)",
    definition:
      "Bồi thường chi phí ăn ở, vé máy bay mới khi bị lỡ chuyến bay kết nối do chuyến bay trước bị hoãn/hủy.",
    category: "Travel",
  },
  {
    id: "t16",
    term: "Bảo hiểm hành lý bị hư hỏng (Baggage Damage)",
    definition:
      "Bồi thường khi hành lý ký gửi bị hư hỏng trong quá trình vận chuyển.",
    category: "Travel",
  },
  {
    id: "t17",
    term: "Bảo hiểm trì hoãn hành lý (Baggage Delay)",
    definition:
      "Bồi thường chi phí mua đồ dùng cần thiết khi hành lý bị trì hoãn quá số giờ quy định.",
    category: "Travel",
  },
  {
    id: "t18",
    term: "Bảo hiểm thiết bị thể thao (Sports Equipment Cover)",
    definition:
      "Bảo hiểm riêng cho thiết bị thể thao (golf, trượt tuyết) bị hư hỏng, thất lạc trong chuyến đi.",
    category: "Travel",
  },
  {
    id: "t19",
    term: "Bảo hiểm cho thuê xe (Rental Car Excess)",
    definition:
      "Bảo hiểm bồi thường mức khấu trừ (excess) khi thuê xe ở nước ngoài bị hư hỏng, tai nạn.",
    category: "Travel",
  },
  {
    id: "t20",
    term: "Bảo hiểm mất đồ cá nhân (Personal Belongings Loss)",
    definition:
      "Bồi thường khi đồ cá nhân (điện thoại, máy ảnh, trang sức) bị mất cắp trong chuyến đi.",
    category: "Travel",
  },
  {
    id: "t21",
    term: "Bảo hiểm khẩn cấy cho thú cưng (Emergency Pet Care)",
    definition:
      "Bảo hiểm chi trả chi phí chăm sóc thú cưng khi chủ đi du lịch và gặp sự cố không về kịp.",
    category: "Travel",
  },
  {
    id: "t22",
    term: "Bảo hiểm nhà cửa khi đi vắng (Home Insurance while Away)",
    definition:
      "Bảo hiểm mở rộng cho nhà cửa khi chủ nhà đi du lịch dài ngày (cháy nổ, trộm cắp).",
    category: "Travel",
  },
  {
    id: "t23",
    term: "Bảo hiểm thể thao mạo hiểm (Adventure Sports Cover)",
    definition:
      "Bảo hiểm cho các môn thể thao mạo hiểm như leo núi, lặn biển, nhảy dù trong chuyến đi.",
    category: "Travel",
  },
  {
    id: "t24",
    term: "Bảo hiểm du lịch quốc tế (International Travel Insurance)",
    definition:
      "Bảo hiểm du lịch toàn diện cho chuyến đi ra nước ngoài, bao gồm y tế, hành lý, hủy chuyến.",
    category: "Travel",
  },
  {
    id: "t25",
    term: "Bảo hiểm du lịch nội địa (Domestic Travel Insurance)",
    definition:
      "Bảo hiểm du lịch cho chuyến đi trong nước, thường có phạm vi và quyền lợi đơn giản hơn quốc tế.",
    category: "Travel",
  },
  {
    id: "t26",
    term: "Bảo hiểm du lịch nhiều chuyến (Multi-trip Insurance)",
    definition:
      "Bảo hiểm cho nhiều chuyến đi trong vòng một năm, tiết kiệm chi phí cho người đi du lịch thường xuyên.",
    category: "Travel",
  },
  {
    id: "t27",
    term: "Bảo hiểm du lịch dài ngày (Long-stay Travel Insurance)",
    definition:
      "Bảo hiểm cho chuyến đi dài ngày (trên 30 ngày), thường có điều kiện và phí khác với chuyến ngắn.",
    category: "Travel",
  },
  {
    id: "t28",
    term: "Bảo hiểm du lịch gia đình (Family Travel Insurance)",
    definition:
      "Bảo hiểm cho cả gia đình đi du lịch cùng nhau, thường có ưu đãi phí cho trẻ em.",
    category: "Travel",
  },
  {
    id: "t29",
    term: "Bảo hiểm du lịch doanh nghiệp (Business Travel Insurance)",
    definition:
      "Bảo hiểm cho nhân viên đi công tác, bao gồm các rủi ro đặc thù công việc và thiết bị làm việc.",
    category: "Travel",
  },
  {
    id: "t30",
    term: "Bảo hiểm du lịch cho người cao tuổi (Senior Travel Insurance)",
    definition:
      "Bảo hiểm du lịch thiết kế riêng cho người trên 65 tuổi, có xem xét các bệnh có sẵn.",
    category: "Travel",
  },
  {
    id: "t31",
    term: "Visa bị từ chối (Visa Denial)",
    definition:
      "Quyền lợi chi trả chi phí xin visa hoặc hủy chuyến nếu visa bị đại sứ quán từ chối.",
    category: "Travel",
  },
  {
    id: "t32",
    term: "Bắt cóc con tin (Hijack)",
    definition:
      "Trợ cấp tiền mặt cho mỗi ngày bị bắt cóc hoặc khống chế trên phương tiện vận tải.",
    category: "Travel",
  },
  {
    id: "t33",
    term: "Thiên tai (Natural Disaster)",
    definition: "Bão, lũ, động đất khiến chuyến đi bị hủy hoặc phải sơ tán.",
    category: "Travel",
  },
  {
    id: "t34",
    term: "Thẻ tín dụng bị mất (Credit Card Fraud)",
    definition:
      "Bồi thường cho các giao dịch gian lận phát sinh khi thẻ tín dụng bị mất cắp ở nước ngoài.",
    category: "Travel",
  },
  {
    id: "t35",
    term: "Chơi Golf (Golf Cover)",
    definition:
      "Bảo hiểm cho dụng cụ chơi golf và trách nhiệm hố golf (Hole-in-one) khi đi du lịch.",
    category: "Travel",
  },
  {
    id: "t36",
    term: "Bảo hiểm trượt tuyết (Skiing Cover)",
    definition:
      "Mở rộng bảo hiểm cho tai nạn khi tham gia trượt tuyết giải trí.",
    category: "Travel",
  },
  {
    id: "t37",
    term: "Hỗ trợ ngôn ngữ (Language Assistance)",
    definition:
      "Dịch vụ thông dịch qua điện thoại trong tình huống khẩn cấp ở nước ngoài.",
    category: "Travel",
  },
  {
    id: "t38",
    term: "Mất tiền đặt cọc (Loss of Deposit)",
    definition:
      "Bồi thường tiền cọc khách sạn/tour không được hoàn lại khi hủy chuyến.",
    category: "Travel",
  },
  {
    id: "t39",
    term: "Rủi ro khủng bố (Terrorism Extension)",
    definition:
      "Mở rộng bảo hiểm cho các sự cố liên quan đến khủng bố (thường bị loại trừ ở đơn tiêu chuẩn).",
    category: "Travel",
  },
  {
    id: "t40",
    term: "Vùng chiến sự (War Zone)",
    definition:
      "Khu vực đang xảy ra chiến tranh, thường là điểm loại trừ tuyệt đối của bảo hiểm du lịch.",
    category: "Travel",
  },
  {
    id: "t41",
    term: "Hộ chiếu vắc xin (Vaccine Passport)",
    definition:
      "Giấy tờ chứng minh tiêm chủng, sự thiếu hụt giấy tờ này có thể làm gián đoạn chuyến đi.",
    category: "Travel",
  },
  {
    id: "t42",
    term: "Quá cảnh (Transit)",
    definition:
      "Thời gian dừng chờ tại sân bay trung gian. Bảo hiểm vẫn có hiệu lực trong khu vực quá cảnh.",
    category: "Travel",
  },
  {
    id: "t43",
    term: "Hành lý xách tay (Carry-on)",
    definition:
      "Đồ đạc mang theo người lên máy bay. Rủi ro mất cắp thường thấp hơn ký gửi nhưng vẫn được bảo hiểm.",
    category: "Travel",
  },
  {
    id: "t44",
    term: "Hành lý ký gửi (Checked Baggage)",
    definition: "Hành lý gửi khoang hàng, dễ bị thất lạc hoặc hư hỏng nhất.",
    category: "Travel",
  },
  {
    id: "t45",
    term: "Bảo hiểm người giúp việc (Domestic Helper)",
    definition:
      "Bảo hiểm cho người giúp việc đi cùng gia đình trong chuyến du lịch.",
    category: "Travel",
  },
  {
    id: "t46",
    term: "Du lịch mạo hiểm (Adventure Travel)",
    definition:
      "Các chuyến đi có tính chất khám phá, leo núi, thám hiểm - cần mua gói mở rộng.",
    category: "Travel",
  },
  {
    id: "t47",
    term: "Hỗ trợ lãnh sự (Consular Referral)",
    definition:
      "Giới thiệu và hỗ trợ liên hệ với đại sứ quán/lãnh sự quán khi gặp sự cố pháp lý.",
    category: "Travel",
  },
  {
    id: "t48",
    term: "Chi phí điện thoại khẩn cấp",
    definition:
      "Bồi thường cước phí điện thoại gọi về tổng đài bảo hiểm khi gặp sự cố.",
    category: "Travel",
  },
  {
    id: "t49",
    term: "Bảo lãnh viện phí quốc tế",
    definition:
      "Công ty bảo hiểm thanh toán trực tiếp cho bệnh viện nước ngoài (thường chỉ áp dụng nội trú chi phí lớn).",
    category: "Travel",
  },
  {
    id: "t50",
    term: "Schengen",
    definition:
      "Khối các nước châu Âu yêu cầu bắt buộc phải có bảo hiểm du lịch mức 30.000 EUR để xin visa.",
    category: "Travel",
  },
  // =================================================================
  // DANH MỤC MỚI: PROPERTY (BẢO HIỂM NHÀ TƯ NHÂN/TÀI SẢN)
  // =================================================================
  {
    id: "p1",
    term: "Hỏa hoạn (Fire)",
    definition:
      "Cháy do lửa phát sinh ngoài kiểm soát, gây thiệt hại cho ngôi nhà và tài sản.",
    category: "Property",
  },
  {
    id: "p2",
    term: "Sét đánh (Lightning)",
    definition:
      "Tia sét đánh trực tiếp vào ngôi nhà gây hư hỏng kiến trúc hoặc hệ thống điện.",
    category: "Property",
  },
  {
    id: "p3",
    term: "Nổ (Explosion)",
    definition:
      "Nổ nồi hơi, bình gas hoặc các thiết bị áp suất trong gia đình gây thiệt hại.",
    category: "Property",
  },
  {
    id: "p4",
    term: "Giông bão (Storm)",
    definition:
      "Gió mạnh, bão tố gây tốc mái, đổ tường hoặc hư hại cấu trúc nhà.",
    category: "Property",
  },
  {
    id: "p5",
    term: "Lũ lụt (Flood)",
    definition:
      "Nước dâng cao từ sông, hồ, hoặc mưa lớn gây ngập lụt ngôi nhà.",
    category: "Property",
  },
  {
    id: "p6",
    term: "Vỡ đường ống nước (Bursting of Pipes)",
    definition:
      "Nước tràn do vỡ hoặc tràn các bể chứa, thiết bị chứa nước hoặc đường ống dẫn.",
    category: "Property",
  },
  {
    id: "p7",
    term: "Trộm cắp (Theft)",
    definition:
      "Hành vi lấy cắp tài sản (thường yêu cầu có dấu hiệu đột nhập hoặc sử dụng vũ lực).",
    category: "Property",
  },
  {
    id: "p8",
    term: "Trộm đột nhập (Burglary)",
    definition:
      "Trộm cắp có để lại dấu vết cạy phá, đột nhập bất hợp pháp vào ngôi nhà.",
    category: "Property",
  },
  {
    id: "p9",
    term: "Cướp (Robbery)",
    definition:
      "Hành vi dùng vũ lực hoặc đe dọa dùng vũ lực để chiếm đoạt tài sản.",
    category: "Property",
  },
  {
    id: "p10",
    term: "Đâm va của xe cơ giới (Impact Damage)",
    definition:
      "Thiệt hại do xe cộ hoặc súc vật không thuộc quyền sở hữu của chủ nhà đâm vào ngôi nhà.",
    category: "Property",
  },
  {
    id: "p11",
    term: "Máy bay rơi (Aircraft Damage)",
    definition:
      "Thiệt hại do máy bay hoặc các vật thể từ trên không rơi vào ngôi nhà.",
    category: "Property",
  },
  {
    id: "p12",
    term: "Động đất (Earthquake)",
    definition: "Rung chấn địa chất gây nứt, sập ngôi nhà.",
    category: "Property",
  },
  {
    id: "p13",
    term: "Sụt lún (Subsidence)",
    definition:
      "Sự chuyển dịch của nền đất xuống phía dưới gây hư hại móng và kết cấu nhà.",
    category: "Property",
  },
  {
    id: "p14",
    term: "Đất trồi (Heave)",
    definition:
      "Sự chuyển dịch của nền đất lên phía trên, ngược lại với sụt lún.",
    category: "Property",
  },
  {
    id: "p15",
    term: "Sạt lở đất (Landslip)",
    definition: "Đất đá từ trên cao trượt xuống đè vào ngôi nhà.",
    category: "Property",
  },
  {
    id: "p16",
    term: "Chi phí dọn dẹp hiện trường (Removal of Debris)",
    definition:
      "Chi phí cần thiết để dọn dẹp xà bần, mảnh vụn sau tổn thất để sửa chữa lại nhà.",
    category: "Property",
  },
  {
    id: "p17",
    term: "Chi phí chữa cháy (Firefighting Expenses)",
    definition: "Chi phí hợp lý trả cho việc dập lửa hoặc ngăn chặn cháy lan.",
    category: "Property",
  },
  {
    id: "p18",
    term: "Mất tiền thuê nhà (Loss of Rent)",
    definition:
      "Bồi thường tiền thuê nhà bị mất (nếu cho thuê) hoặc chi phí thuê nhà tạm (nếu để ở) khi nhà bị hỏng nặng.",
    category: "Property",
  },
  {
    id: "p19",
    term: "Kính cố định (Fixed Glass)",
    definition:
      "Bảo hiểm cho các tấm kính lắp cố định (cửa sổ, cửa đi) bị vỡ do tai nạn bất ngờ.",
    category: "Property",
  },
  {
    id: "p20",
    term: "Trách nhiệm công cộng (Public Liability)",
    definition:
      "Trách nhiệm bồi thường của chủ nhà đối với bên thứ ba (khách, hàng xóm) bị tai nạn trong khuôn viên nhà.",
    category: "Property",
  },
  {
    id: "p21",
    term: "Tài sản bên trong (Contents)",
    definition: "Đồ đạc, nội thất, thiết bị điện tử nằm bên trong ngôi nhà.",
    category: "Property",
  },
  {
    id: "p22",
    term: "Khung nhà (Building)",
    definition: "Phần kết cấu xây dựng bao gồm móng, tường, sàn, mái, cửa.",
    category: "Property",
  },
  {
    id: "p23",
    term: "Vật quý (Valuables)",
    definition:
      "Trang sức, đá quý, tranh nghệ thuật - thường bị giới hạn số tiền bồi thường rất thấp hoặc loại trừ.",
    category: "Property",
  },
  {
    id: "p24",
    term: "Hao mòn tự nhiên (Wear and Tear)",
    definition:
      "Sự xuống cấp do thời gian và sử dụng thông thường - luôn bị loại trừ.",
    category: "Property",
  },
  {
    id: "p25",
    term: "Thông báo không người ở (Unoccupancy)",
    definition:
      "Quy định nhà không có người ở quá số ngày nhất định (thường 30-60 ngày) sẽ bị tạm dừng bảo hiểm.",
    category: "Property",
  },
  {
    id: "p26",
    term: "Định giá lại (Reinstatement Value)",
    definition:
      "Cơ sở bồi thường theo giá trị xây mới lại, không tính khấu hao (New for Old).",
    category: "Property",
  },
  {
    id: "p27",
    term: "Giá trị thị trường (Market Value)",
    definition: "Giá trị tài sản tại thời điểm tổn thất, có tính đến khấu hao.",
    category: "Property",
  },
  {
    id: "p28",
    term: "Cháy lan (Spreading Fire)",
    definition: "Cháy từ nhà hàng xóm lan sang nhà được bảo hiểm.",
    category: "Property",
  },
  {
    id: "p29",
    term: "Thiệt hại do nước (Water Damage)",
    definition:
      "Hư hỏng sàn gỗ, thạch cao, nội thất do nước mưa rò rỉ hoặc quên tắt vòi nước.",
    category: "Property",
  },
  {
    id: "p30",
    term: "Kiến trúc sư và Giám sát (Architects & Surveyors Fees)",
    definition:
      "Chi phí thuê chuyên gia thiết kế lại ngôi nhà sau tổn thất, được bảo hiểm chi trả theo giới hạn.",
    category: "Property",
  },
  {
    id: "p31",
    term: "Cây cối đổ (Falling Trees)",
    definition:
      "Cây cối gãy đổ đè vào nhà gây hư hỏng (không phải do người được bảo hiểm chặt).",
    category: "Property",
  },
  {
    id: "p32",
    term: "Bảo hiểm trộm cướp tiền mặt (Cash in Safe)",
    definition:
      "Bảo hiểm cho tiền mặt để trong két sắt bị mất trộm (thường giới hạn nhỏ).",
    category: "Property",
  },
  {
    id: "p33",
    term: "Hệ thống an ninh (Security System)",
    definition:
      "Hệ thống báo động, camera. Việc có lắp đặt có thể giúp giảm phí bảo hiểm.",
    category: "Property",
  },
  {
    id: "p34",
    term: "Bảo trì (Maintenance)",
    definition:
      "Nghĩa vụ của chủ nhà phải duy trì ngôi nhà ở tình trạng tốt. Hư hỏng do thiếu bảo trì sẽ bị từ chối.",
    category: "Property",
  },
  {
    id: "p35",
    term: "Chập điện (Short Circuit)",
    definition:
      "Nguyên nhân gây cháy phổ biến. Thiệt hại của chính thiết bị gây chập thường bị loại trừ, nhưng hậu quả cháy lan thì được bồi thường.",
    category: "Property",
  },
  {
    id: "p36",
    term: "Cố ý phá hoại (Malicious Damage)",
    definition: "Hành động cố ý gây hư hỏng tài sản của người khác (phá hoại).",
    category: "Property",
  },
  {
    id: "p37",
    term: "Biểu tình, Bạo loạn (Riots, Strikes)",
    definition: "Thiệt hại do các cuộc đình công, bạo động gây ra.",
    category: "Property",
  },
  {
    id: "p38",
    term: "Tài sản di dời tạm thời (Temporary Removal)",
    definition:
      "Bảo hiểm cho tài sản được mang ra khỏi nhà tạm thời (để sửa chữa, vệ sinh) nếu bị tổn thất.",
    category: "Property",
  },
  {
    id: "p39",
    term: "Đồ điện tử (Electronic Equipment)",
    definition:
      "TV, máy tính, dàn âm thanh - dễ bị hỏng do sét đánh lan truyền.",
    category: "Property",
  },
  {
    id: "p40",
    term: "Sét lan truyền",
    definition:
      "Sét đánh vào đường dây điện/thoại gần đó truyền vào làm hỏng thiết bị điện trong nhà.",
    category: "Property",
  },
  {
    id: "p41",
    term: "Khu vực chung cư (Apartment)",
    definition:
      "Căn hộ chung cư, thường chỉ cần mua bảo hiểm cho phần sở hữu riêng và nội thất.",
    category: "Property",
  },
  {
    id: "p42",
    term: "Nhà liền kề (Townhouse)",
    definition: "Loại hình nhà phố, nguy cơ cháy lan cao.",
    category: "Property",
  },
  {
    id: "p43",
    term: "Biệt thự (Villa)",
    definition:
      "Nhà ở riêng biệt, thường có giá trị bảo hiểm cao và yêu cầu an ninh tốt.",
    category: "Property",
  },
  {
    id: "p44",
    term: "Bảo hiểm cháy nổ bắt buộc",
    definition:
      "Loại hình bảo hiểm bắt buộc đối với chung cư, nhà ở kết hợp kinh doanh có nguy cơ cháy nổ.",
    category: "Property",
  },
  {
    id: "p45",
    term: "Giá trị xây dựng (Reconstruction Cost)",
    definition:
      "Chi phí để xây lại ngôi nhà tương đương, không bao gồm giá trị đất.",
    category: "Property",
  },
  {
    id: "p46",
    term: "Tài sản ngoài trời (Outdoor Contents)",
    definition:
      "Bàn ghế sân vườn, cây cảnh, tượng - thường bị loại trừ hoặc hạn chế bảo hiểm.",
    category: "Property",
  },
  {
    id: "p47",
    term: "Thực phẩm trong tủ lạnh (Freezer Contents)",
    definition:
      "Quyền lợi bồi thường thực phẩm bị hư hỏng do tủ lạnh hỏng hoặc mất điện kéo dài.",
    category: "Property",
  },
  {
    id: "p48",
    term: "Thay ổ khóa (Lock Replacement)",
    definition: "Chi phí thay ổ khóa cửa chính nếu chìa khóa bị mất trộm.",
    category: "Property",
  },
  {
    id: "p49",
    term: "Tài liệu kinh doanh (Business Books)",
    definition: "Sổ sách, giấy tờ làm việc để tại nhà - thường bị loại trừ.",
    category: "Property",
  },
  {
    id: "p50",
    term: "Tài sản của khách (Visitor's Effects)",
    definition:
      "Đồ dùng cá nhân của khách đến chơi nhà bị hư hỏng trong vụ hỏa hoạn.",
    category: "Property",
  },

  // =================================================================
  // DANH MỤC MỚI: MARINE (BẢO HIỂM HÀNG HẢI/VẬN CHUYỂN)
  // =================================================================
  {
    id: "m1",
    term: "Tổn thất chung (General Average)",
    definition:
      "Hy sinh hoặc chi phí đặc biệt được thực hiện một cách cố ý và hợp lý nhằm cứu tàu và hàng hóa thoát khỏi hiểm họa chung.",
    category: "Marine",
  },
  {
    id: "m2",
    term: "Tổn thất riêng (Particular Average)",
    definition:
      "Tổn thất bộ phận của đối tượng bảo hiểm do rủi ro được bảo hiểm gây ra, không thuộc tổn thất chung.",
    category: "Marine",
  },
  {
    id: "m3",
    term: "Bảo hiểm thân tàu (Hull Insurance)",
    definition: "Bảo hiểm cho vỏ tàu, máy móc và các trang thiết bị trên tàu.",
    category: "Marine",
  },
  {
    id: "m4",
    term: "Bảo hiểm hàng hóa (Cargo Insurance)",
    definition:
      "Bảo hiểm cho hàng hóa trong quá trình vận chuyển bằng đường biển, đường bộ, đường hàng không.",
    category: "Marine",
  },
  {
    id: "m5",
    term: "Trách nhiệm dân sự chủ tàu (P&I)",
    definition:
      "Bảo hiểm trách nhiệm của chủ tàu đối với bên thứ ba (đâm va, ô nhiễm dầu, thuyền viên).",
    category: "Marine",
  },
  {
    id: "m6",
    term: "Điều kiện A (Institute Cargo Clauses A)",
    definition:
      "Điều kiện bảo hiểm hàng hóa rộng nhất (mọi rủi ro), trừ các loại trừ quy định.",
    category: "Marine",
  },
  {
    id: "m7",
    term: "Điều kiện B (Institute Cargo Clauses B)",
    definition:
      "Điều kiện bảo hiểm các rủi ro chính như cháy nổ, mắc cạn, đâm va, nước cuốn trôi...",
    category: "Marine",
  },
  {
    id: "m8",
    term: "Điều kiện C (Institute Cargo Clauses C)",
    definition:
      "Điều kiện bảo hiểm hẹp nhất, chủ yếu cho các rủi ro thảm họa lớn (đắm tàu, cháy nổ).",
    category: "Marine",
  },
  {
    id: "m9",
    term: "Incoterms",
    definition:
      "Các điều kiện thương mại quốc tế quy định trách nhiệm mua bảo hiểm của người bán và người mua (FOB, CIF...).",
    category: "Marine",
  },
  {
    id: "m10",
    term: "CIF (Cost, Insurance, Freight)",
    definition:
      "Điều kiện giao hàng mà người bán chịu chi phí, bảo hiểm và cước phí đến cảng đến.",
    category: "Marine",
  },
  {
    id: "m11",
    term: "FOB (Free On Board)",
    definition:
      "Điều kiện giao hàng mà trách nhiệm chuyển sang người mua khi hàng đã lên tàu (người mua tự mua bảo hiểm).",
    category: "Marine",
  },
  {
    id: "m12",
    term: "Vận đơn (Bill of Lading)",
    definition:
      "Chứng từ vận tải đường biển do người chuyên chở cấp, là bằng chứng sở hữu hàng hóa.",
    category: "Marine",
  },
  {
    id: "m13",
    term: "Mắc cạn (Stranding)",
    definition: "Tàu bị kẹt trên nền đất/đá và không thể tự thoát ra được.",
    category: "Marine",
  },
  {
    id: "m14",
    term: "Đắm tàu (Sinking)",
    definition: "Tàu chìm hoàn toàn xuống nước và không thể nổi lên được.",
    category: "Marine",
  },
  {
    id: "m15",
    term: "Ném hàng xuống biển (Jettison)",
    definition:
      "Hành động vứt bỏ hàng hóa để làm nhẹ tàu khi gặp nguy hiểm (được tính là tổn thất chung).",
    category: "Marine",
  },
  {
    id: "m16",
    term: "Cướp biển (Piracy)",
    definition:
      "Hành vi tấn công, cướp tàu trên biển. Có thể được bảo hiểm hoặc loại trừ tùy điều kiện.",
    category: "Marine",
  },
  {
    id: "m17",
    term: "Chi phí cứu hộ (Salvage Charges)",
    definition:
      "Chi phí trả cho người cứu hộ để cứu tài sản khỏi hiểm họa trên biển.",
    category: "Marine",
  },
  {
    id: "m18",
    term: "Chiến tranh đình công (War & Strikes)",
    definition:
      "Điều khoản mở rộng bảo hiểm cho rủi ro chiến tranh và đình công trong vận chuyển hàng hóa.",
    category: "Marine",
  },
  {
    id: "m19",
    term: "Hàng siêu trường siêu trọng",
    definition:
      "Hàng hóa có kích thước hoặc trọng lượng vượt quá quy định, yêu cầu phương tiện và bảo hiểm đặc thù.",
    category: "Marine",
  },
  {
    id: "m20",
    term: "Kho đến Kho (Warehouse to Warehouse)",
    definition:
      "Phạm vi bảo hiểm bắt đầu từ kho người bán và kết thúc tại kho người mua.",
    category: "Marine",
  },
];

// ==========================================
// 2. DATA QUY TRÌNH (CLAIMS) - REALISTIC FLOW
// ==========================================
export const claimStepsData: ClaimStep[] = [
  // --- 6 BƯỚC QUY TRÌNH CHUẨN (HIỂN THỊ Ở THANH TIẾN TRÌNH) ---
  {
    title: "Thông báo sự kiện",
    description:
      "Thông báo ngay cho bảo hiểm qua Hotline hoặc App trong vòng 24h (với xe cơ giới) hoặc ngay khi nhập viện (với sức khỏe).",
    icon: "alert",
  },
  {
    title: "Thu thập chứng từ",
    description:
      "Chuẩn bị đầy đủ hóa đơn VAT, bảng kê chi tiết, hồ sơ y tế (với sức khỏe) hoặc biên bản hiện trường, ảnh chụp xe (với ô tô).",
    icon: "file-text",
  },
  {
    title: "Gửi yêu cầu bồi thường",
    description:
      "Nộp hồ sơ qua Ứng dụng di động (khuyên dùng để xử lý nhanh nhất), qua Bưu điện hoặc nộp trực tiếp tại quầy CSKH.",
    icon: "send",
  },
  {
    title: "Thẩm định hồ sơ",
    description:
      "Công ty bảo hiểm tiến hành kiểm tra tính hợp lệ của hồ sơ. Thời gian thẩm định thường từ 3-7 ngày làm việc.",
    icon: "search",
  },
  {
    title: "Thông báo kết quả",
    description:
      "Nhận Thư thông báo chấp thuận bồi thường (nêu rõ số tiền) hoặc Thư từ chối (kèm lý do) qua Email/SMS.",
    icon: "bell",
  },
  {
    title: "Nhận tiền chi trả",
    description:
      "Tiền được chuyển khoản vào tài khoản ngân hàng của Người thụ hưởng trong vòng 5-10 ngày sau khi có thông báo chấp thuận.",
    icon: "bank",
  },

  // --- CHI TIẾT NGHIỆP VỤ BẢO HIỂM SỨC KHỎE (HEALTH) ---
  {
    title: "[Sức khỏe] Quy trình Bảo lãnh viện phí (Direct Billing)",
    description:
      "Áp dụng tại các bệnh viện liên kết. Bạn chỉ cần xuất trình thẻ bảo hiểm + CMND/CCCD tại quầy lễ tân. Bảo hiểm sẽ thanh toán trực tiếp cho bệnh viện các khoản thuộc phạm vi.",
  },
  {
    title: "[Sức khỏe] Hồ sơ yêu cầu trả tiền trước (Reimbursement)",
    description:
      "Áp dụng khi khám tại cơ sở KHÔNG bảo lãnh. Bạn cần thanh toán trước, lấy đầy đủ hóa đơn, chứng từ về nộp lại cho bảo hiểm sau.",
  },
  {
    title: "[Sức khỏe] Các chứng từ Y tế bắt buộc",
    description:
      "Bao gồm: Sổ khám bệnh, Đơn thuốc, Phiếu chỉ định xét nghiệm, Kết quả xét nghiệm/X-quang, Giấy ra viện (nếu nội trú), Giấy chứng nhận phẫu thuật (nếu có).",
  },
  {
    title: "[Sức khỏe] Yêu cầu về Hóa đơn tài chính",
    description:
      "Hóa đơn VAT (Hóa đơn điện tử) là bắt buộc với chi phí trên 200.000đ. Hóa đơn bán lẻ thường không được chấp nhận tại các công ty bảo hiểm lớn.",
  },
  {
    title: "[Sức khỏe] Thời hạn nộp hồ sơ",
    description:
      "Thông thường bạn có 30 - 60 ngày kể từ ngày điều trị cuối cùng (hoặc ngày xuất viện) để nộp hồ sơ yêu cầu bồi thường.",
  },

  // --- CHI TIẾT NGHIỆP VỤ BẢO HIỂM Ô TÔ (CAR) ---
  {
    title: "[Ô tô] Xử lý khi xảy ra tai nạn",
    description:
      "Giữ nguyên hiện trường, chụp ảnh các góc độ va chạm. Gọi ngay hotline bảo hiểm để được hướng dẫn giám định viên đến hiện trường.",
  },
  {
    title: "[Ô tô] Giám định tổn thất",
    description:
      "Giám định viên của công ty bảo hiểm sẽ lập 'Biên bản giám định' xác định nguyên nhân và mức độ thiệt hại. Bạn cần ký xác nhận vào biên bản này.",
  },
  {
    title: "[Ô tô] Hồ sơ pháp lý xe",
    description:
      "Cần cung cấp: Đăng ký xe, Đăng kiểm, Giấy phép lái xe của người điều khiển tại thời điểm tai nạn, Bảo hiểm TNDS bắt buộc.",
  },
  {
    title: "[Ô tô] Lựa chọn Gara sửa chữa",
    description:
      "Nếu có điều khoản 'Gara tự chọn', bạn được quyền đưa xe vào hãng (chính hãng). Nếu không, bạn sửa tại các Gara liên kết do công ty bảo hiểm chỉ định.",
  },
  {
    title: "[Ô tô] Mức miễn thường (Deductible)",
    description:
      "Là số tiền bạn phải tự trả trong mỗi vụ tổn thất (thường là 500k - 1 triệu đồng). Bảo hiểm chỉ chi trả số tiền vượt quá mức này.",
  },
  {
    title: "[Ô tô] Điều khoản Thủy kích",
    description:
      "Nếu xe đi vào vùng ngập nước, tuyệt đối KHÔNG khởi động lại máy nếu xe chết máy. Việc cố tình khởi động lại gây hư hỏng nặng sẽ bị từ chối bồi thường (quy tắc 80/20 hoặc từ chối toàn bộ).",
  },

  // --- CÁC VẤN ĐỀ CHUNG & LƯU Ý QUAN TRỌNG ---
  {
    title: "Yêu cầu bổ sung hồ sơ",
    description:
      "Nếu hồ sơ thiếu, nhân viên bồi thường sẽ gửi Email yêu cầu bổ sung. Thời gian thẩm định sẽ được tính lại từ đầu sau khi bạn nộp đủ chứng từ.",
  },
  {
    title: "Giải quyết tranh chấp",
    description:
      "Nếu không đồng ý với kết quả bồi thường, bạn có quyền gửi Đơn khiếu nại trong vòng 90 ngày. Công ty sẽ phúc tra hồ sơ trong 15-30 ngày.",
  },
  {
    title: "Quy định về 'Bệnh có sẵn'",
    description:
      "Với bảo hiểm sức khỏe cá nhân năm đầu tiên, các bệnh đã tồn tại trước khi mua bảo hiểm thường bị loại trừ hoặc chờ 365 ngày.",
  },
  {
    title: "Quy định về bản gốc/bản sao",
    description:
      "Hóa đơn tài chính phải là bản gốc (hoặc bản in từ HĐ điện tử). Các giấy tờ tùy thân có thể là bản sao công chứng. Hồ sơ y tế có thể nộp bản sao nếu có đối chiếu.",
  },
];

// ==========================================
// 3. DATA BỆNH VIỆN (HOSPITALS) - UPDATED 2025
// ==========================================
export const hospitalsData: Hospital[] = [
  // --- TP. Hồ Chí Minh ---
  {
    id: "hcm1",
    name: "Bệnh viện Pháp Việt (FV)",
    address: "6 Nguyễn Lương Bằng, Q.7",
    city: "Ho Chi Minh",
    phone: "028 5411 3333",
    type: "International",
  },
  {
    id: "hcm2",
    name: "Bệnh viện Vinmec Central Park",
    address: "208 Nguyễn Hữu Cảnh, Bình Thạnh",
    city: "Ho Chi Minh",
    phone: "028 3622 1166",
    type: "International",
  },
  {
    id: "hcm3",
    name: "Bệnh viện Đại học Y Dược TP.HCM",
    address: "215 Hồng Bàng, Q.5",
    city: "Ho Chi Minh",
    phone: "028 3855 4269",
    type: "Public",
  },
  {
    id: "hcm4",
    name: "Bệnh viện Chợ Rẫy",
    address: "201B Nguyễn Chí Thanh, Q.5",
    city: "Ho Chi Minh",
    phone: "028 3855 4137",
    type: "Public",
  },
  {
    id: "hcm5",
    name: "Bệnh viện Hoàn Mỹ Sài Gòn",
    address: "60-60A Phan Xích Long, Phú Nhuận",
    city: "Ho Chi Minh",
    phone: "028 3990 2468",
    type: "Private",
  },
  {
    id: "hcm6",
    name: "Bệnh viện Từ Dũ",
    address: "284 Cống Quỳnh, Q.1",
    city: "Ho Chi Minh",
    phone: "1900 7237",
    type: "Public",
  }, // Cập nhật hotline CSKH
  {
    id: "hcm7",
    name: "Bệnh viện Nhi Đồng 1",
    address: "341 Sư Vạn Hạnh, Q.10",
    city: "Ho Chi Minh",
    phone: "028 3927 1119",
    type: "Public",
  },
  {
    id: "hcm8",
    name: "Bệnh viện Đa khoa Quốc tế Hạnh Phúc",
    address: "18 Đại lộ Bình Dương (Giáp ranh)",
    city: "Ho Chi Minh",
    phone: "1900 6765",
    type: "International",
  },
  {
    id: "hcm9",
    name: "Bệnh viện Tâm Anh TP.HCM",
    address: "2B Phổ Quang, Tân Bình",
    city: "Ho Chi Minh",
    phone: "028 7102 6789",
    type: "Private",
  },
  {
    id: "hcm10",
    name: "Bệnh viện Tai Mũi Họng Sài Gòn",
    address: "1-3 Trịnh Văn Cấn, Q.1",
    city: "Ho Chi Minh",
    phone: "028 3821 3456",
    type: "Private",
  },
  {
    id: "hcm11",
    name: "Bệnh viện Nhi Đồng 2",
    address: "14 Lý Tự Trọng, Q.1",
    city: "Ho Chi Minh",
    phone: "028 3829 5721",
    type: "Public",
  },
  {
    id: "hcm12",
    name: "Bệnh viện Chấn thương Chỉnh hình",
    address: "929 Trần Hưng Đạo, Q.5",
    city: "Ho Chi Minh",
    phone: "028 3923 5791",
    type: "Public",
  },
  {
    id: "hcm13",
    name: "Bệnh viện Mắt TP.HCM",
    address: "280 Điện Biên Phủ, Q.3",
    city: "Ho Chi Minh",
    phone: "028 3932 5374",
    type: "Public",
  },
  {
    id: "hcm14",
    name: "Bệnh viện Da liễu TP.HCM",
    address: "2 Nguyễn Thông, Q.3",
    city: "Ho Chi Minh",
    phone: "028 3930 8131",
    type: "Public",
  },
  {
    id: "hcm15",
    name: "Bệnh viện Phụ sản Quốc tế Sài Gòn",
    address: "63 Bùi Thị Xuân, Q.1",
    city: "Ho Chi Minh",
    phone: "028 3925 5555",
    type: "Private",
  },
  {
    id: "hcm16",
    name: "Bệnh viện Đa khoa Quốc tế City (CIH)",
    address: "3 đường số 17A, Bình Trị Đông B, Bình Tân",
    city: "Ho Chi Minh",
    phone: "028 6280 3333",
    type: "International",
  },
  {
    id: "hcm17",
    name: "Bệnh viện Đa khoa Tâm Trí Sài Gòn",
    address: "171 Trường Chinh, Q.12",
    city: "Ho Chi Minh",
    phone: "028 6260 1100",
    type: "Private",
  },
  {
    id: "hcm18",
    name: "Bệnh viện Quốc tế Mỹ (AIH)",
    address: "199 Nguyễn Hoàng, TP. Thủ Đức",
    city: "Ho Chi Minh",
    phone: "028 3910 9999",
    type: "International",
  },
  {
    id: "hcm19",
    name: "Bệnh viện Đa khoa Quốc tế Vinmec Sài Gòn",
    address: "2-2 Bis Tôn Đức Thắng, Q.1",
    city: "Ho Chi Minh",
    phone: "028 3622 1166",
    type: "International",
  },
  {
    id: "hcm20",
    name: "Phòng khám Family Medical Practice",
    address: "34 Lê Duẩn, Q.1",
    city: "Ho Chi Minh",
    phone: "028 3822 7848",
    type: "International",
  },
  {
    id: "hcm21",
    name: "Bệnh viện Nhân dân 115",
    address: "527 Sư Vạn Hạnh, Q.10",
    city: "Ho Chi Minh",
    phone: "028 3865 2368",
    type: "Public",
  },
  {
    id: "hcm22",
    name: "Bệnh viện Nhân dân Gia Định",
    address: "1 Nơ Trang Long, Bình Thạnh",
    city: "Ho Chi Minh",
    phone: "028 3841 2692",
    type: "Public",
  },
  {
    id: "hcm23",
    name: "Bệnh viện Thống Nhất",
    address: "1 Lý Thường Kiệt, Tân Bình",
    city: "Ho Chi Minh",
    phone: "028 3869 0277",
    type: "Public",
  },
  {
    id: "hcm24",
    name: "Bệnh viện Hùng Vương",
    address: "128 Hồng Bàng, Q.5",
    city: "Ho Chi Minh",
    phone: "028 3855 8532",
    type: "Public",
  },
  {
    id: "hcm25",
    name: "Bệnh viện Phạm Ngọc Thạch",
    address: "120 Hồng Bàng, Q.5",
    city: "Ho Chi Minh",
    phone: "028 3855 0207",
    type: "Public",
  },
  {
    id: "hcm26",
    name: "Bệnh viện Bình Dân",
    address: "371 Điện Biên Phủ, Q.3",
    city: "Ho Chi Minh",
    phone: "1900 7123",
    type: "Public",
  }, // Cập nhật hotline
  {
    id: "hcm27",
    name: "Bệnh viện Nhi Đồng Thành Phố",
    address: "15 Võ Trần Chí, Bình Chánh",
    city: "Ho Chi Minh",
    phone: "028 2253 6688",
    type: "Public",
  },
  {
    id: "hcm28",
    name: "Bệnh viện Ung Bướu TP.HCM (CS1)",
    address: "3 Nơ Trang Long, Bình Thạnh",
    city: "Ho Chi Minh",
    phone: "1900 636 223",
    type: "Public",
  },
  {
    id: "hcm29",
    name: "Bệnh viện Ung Bướu TP.HCM (CS2)",
    address: "Đường D400, TP. Thủ Đức",
    city: "Ho Chi Minh",
    phone: "1900 636 223",
    type: "Public",
  },
  {
    id: "hcm30",
    name: "Bệnh viện Quân y 175",
    address: "786 Nguyễn Kiệm, Gò Vấp",
    city: "Ho Chi Minh",
    phone: "1900 1175",
    type: "Public",
  }, // Cập nhật hotline
  {
    id: "hcm31",
    name: "Bệnh viện Trưng Vương",
    address: "266 Lý Thường Kiệt, Q.10",
    city: "Ho Chi Minh",
    phone: "028 5448 4949",
    type: "Public",
  },
  {
    id: "hcm32",
    name: "Bệnh viện Nguyễn Tri Phương",
    address: "468 Nguyễn Trãi, Q.5",
    city: "Ho Chi Minh",
    phone: "028 3923 4332",
    type: "Public",
  },
  {
    id: "hcm33",
    name: "Bệnh viện An Bình",
    address: "146 An Bình, Q.5",
    city: "Ho Chi Minh",
    phone: "028 3923 4359",
    type: "Public",
  },
  {
    id: "hcm34",
    name: "Bệnh viện Bệnh Nhiệt đới",
    address: "764 Võ Văn Kiệt, Q.5",
    city: "Ho Chi Minh",
    phone: "1900 7297",
    type: "Public",
  }, // Cập nhật hotline
  {
    id: "hcm35",
    name: "Bệnh viện Tai Mũi Họng TP.HCM",
    address: "155B Trần Quốc Thảo, Q.3",
    city: "Ho Chi Minh",
    phone: "028 3931 7381",
    type: "Public",
  },
  {
    id: "hcm36",
    name: "Bệnh viện Răng Hàm Mặt Trung ương TP.HCM",
    address: "201A Nguyễn Chí Thanh, Q.5",
    city: "Ho Chi Minh",
    phone: "028 3855 6732",
    type: "Public",
  },
  {
    id: "hcm37",
    name: "Bệnh viện Răng Hàm Mặt TP.HCM",
    address: "263 Trần Hưng Đạo, Q.1",
    city: "Ho Chi Minh",
    phone: "028 3836 0191",
    type: "Public",
  },
  {
    id: "hcm38",
    name: "Bệnh viện Tâm Thần TP.HCM",
    address: "766 Võ Văn Kiệt, Q.5",
    city: "Ho Chi Minh",
    phone: "1900 9095",
    type: "Public",
  }, // Cập nhật hotline
  {
    id: "hcm39",
    name: "Bệnh viện Y Học Cổ Truyền TP.HCM",
    address: "179 Nam Kỳ Khởi Nghĩa, Q.3",
    city: "Ho Chi Minh",
    phone: "028 3932 6579",
    type: "Public",
  },
  {
    id: "hcm40",
    name: "Viện Y Dược Học Dân Tộc",
    address: "273 Nguyễn Văn Trỗi, Phú Nhuận",
    city: "Ho Chi Minh",
    phone: "028 3844 3047",
    type: "Public",
  },
  {
    id: "hcm41",
    name: "Bệnh viện Truyền máu Huyết học (CS mới)",
    address: "1 Trần Hữu Nghiệp, Bình Chánh",
    city: "Ho Chi Minh",
    phone: "028 3957 1342",
    type: "Public",
  },
  {
    id: "hcm42",
    name: "Bệnh viện Phục hồi chức năng - Điều trị bệnh nghề nghiệp",
    address: "313 Âu Dương Lân, Q.8",
    city: "Ho Chi Minh",
    phone: "028 3856 9147",
    type: "Public",
  },
  {
    id: "hcm43",
    name: "Bệnh viện Nguyễn Trãi",
    address: "314 Nguyễn Trãi, Q.5",
    city: "Ho Chi Minh",
    phone: "028 3923 5020",
    type: "Public",
  },
  {
    id: "hcm44",
    name: "Bệnh viện 30/4 (Bộ Công An)",
    address: "9 Sư Vạn Hạnh, Q.5",
    city: "Ho Chi Minh",
    phone: "028 3835 4986",
    type: "Public",
  },
  {
    id: "hcm45",
    name: "Bệnh viện 7A (Quân khu 7)",
    address: "466 Nguyễn Trãi, Q.5",
    city: "Ho Chi Minh",
    phone: "028 3923 3584",
    type: "Public",
  },
  {
    id: "hcm46",
    name: "Bệnh viện Chỉnh hình và PHCN TP.HCM",
    address: "1A Lý Thường Kiệt, Tân Bình",
    city: "Ho Chi Minh",
    phone: "028 3864 3785",
    type: "Public",
  },
  {
    id: "hcm47",
    name: "Bệnh viện Tim Tâm Đức",
    address: "4 Nguyễn Lương Bằng, Q.7",
    city: "Ho Chi Minh",
    phone: "028 5411 0036",
    type: "Private",
  },
  {
    id: "hcm48",
    name: "Bệnh viện Đa khoa Quốc tế Nam Sài Gòn",
    address: "88 Đường số 8, Bình Chánh",
    city: "Ho Chi Minh",
    phone: "1800 6767",
    type: "Private",
  },
  {
    id: "hcm49",
    name: "Bệnh viện Mắt Sài Gòn (Lê Thị Riêng)",
    address: "100 Lê Thị Riêng, Q.1",
    city: "Ho Chi Minh",
    phone: "1900 555 553",
    type: "Private",
  },
  {
    id: "hcm50",
    name: "Bệnh viện Mắt Sài Gòn (CMT8)",
    address: "473 Cách Mạng Tháng 8, Q.10",
    city: "Ho Chi Minh",
    phone: "1900 555 553",
    type: "Private",
  },
  {
    id: "hcm51",
    name: "Bệnh viện Xuyên Á",
    address: "42 QL22, Củ Chi",
    city: "Ho Chi Minh",
    phone: "1800 9075",
    type: "Private",
  },
  {
    id: "hcm52",
    name: "Bệnh viện Đa khoa Hồng Đức III",
    address: "32/2 Thống Nhất, Gò Vấp",
    city: "Ho Chi Minh",
    phone: "028 3996 9999",
    type: "Private",
  },
  {
    id: "hcm53",
    name: "Bệnh viện Đa khoa Vạn Hạnh",
    address: "781/B1 Lê Hồng Phong, Q.10",
    city: "Ho Chi Minh",
    phone: "028 3869 5683",
    type: "Private",
  },
  {
    id: "hcm54",
    name: "Bệnh viện An Sinh",
    address: "10 Trần Huy Liệu, Phú Nhuận",
    city: "Ho Chi Minh",
    phone: "028 3845 7777",
    type: "Private",
  },
  {
    id: "hcm55",
    name: "Bệnh viện STO Phương Đông",
    address: "79 Thành Thái, Q.10",
    city: "Ho Chi Minh",
    phone: "028 3868 6386",
    type: "Private",
  },
  {
    id: "hcm56",
    name: "Bệnh viện Triều An",
    address: "425 Kinh Dương Vương, Bình Tân",
    city: "Ho Chi Minh",
    phone: "028 3750 9999",
    type: "Private",
  },
  {
    id: "hcm57",
    name: "Bệnh viện Mỹ Đức",
    address: "4 Núi Thành, Tân Bình",
    city: "Ho Chi Minh",
    phone: "028 7308 5885",
    type: "Private",
  },
  {
    id: "hcm58",
    name: "Bệnh viện Đa khoa Sài Gòn",
    address: "125 Lê Lợi, Q.1",
    city: "Ho Chi Minh",
    phone: "028 3829 1711",
    type: "Public",
  },
  {
    id: "hcm59",
    name: "Bệnh viện Quận 1",
    address: "338 Hai Bà Trưng, Q.1",
    city: "Ho Chi Minh",
    phone: "028 3820 6746",
    type: "Public",
  },
  {
    id: "hcm60",
    name: "Bệnh viện Lê Văn Thịnh (BV Quận 2 cũ)",
    address: "130 Lê Văn Thịnh, TP. Thủ Đức",
    city: "Ho Chi Minh",
    phone: "028 5432 7888",
    type: "Public",
  },
  {
    id: "hcm61",
    name: "Bệnh viện Quận 3",
    address: "114 Trần Quốc Thảo, Q.3",
    city: "Ho Chi Minh",
    phone: "028 3931 9256",
    type: "Public",
  },
  {
    id: "hcm62",
    name: "Bệnh viện Quận 4",
    address: "65 Bến Vân Đồn, Q.4",
    city: "Ho Chi Minh",
    phone: "028 3826 1568",
    type: "Public",
  },
  {
    id: "hcm63",
    name: "Bệnh viện Quận 5",
    address: "642 Nguyễn Trãi, Q.5",
    city: "Ho Chi Minh",
    phone: "028 3855 0235",
    type: "Public",
  },
  {
    id: "hcm64",
    name: "Bệnh viện Quận 6",
    address: "2D Chợ Lớn, Q.6",
    city: "Ho Chi Minh",
    phone: "028 3875 0990",
    type: "Public",
  },
  {
    id: "hcm65",
    name: "Bệnh viện Quận 7",
    address: "101 Nguyễn Thị Thập, Q.7",
    city: "Ho Chi Minh",
    phone: "028 3773 1421",
    type: "Public",
  },
  {
    id: "hcm66",
    name: "Bệnh viện Quận 8",
    address: "82 Cao Lỗ, Q.8",
    city: "Ho Chi Minh",
    phone: "028 3850 6130",
    type: "Public",
  },
  {
    id: "hcm67",
    name: "Bệnh viện Lê Văn Việt (BV Quận 9 cũ)",
    address: "387 Lê Văn Việt, TP. Thủ Đức",
    city: "Ho Chi Minh",
    phone: "028 3897 3628",
    type: "Public",
  },
  {
    id: "hcm68",
    name: "Bệnh viện Quận 10",
    address: "571 Sư Vạn Hạnh, Q.10",
    city: "Ho Chi Minh",
    phone: "028 3862 7693",
    type: "Public",
  },
  {
    id: "hcm69",
    name: "Bệnh viện Quận 11",
    address: "72 Đường số 5, Q.11",
    city: "Ho Chi Minh",
    phone: "028 3858 6257",
    type: "Public",
  },
  {
    id: "hcm70",
    name: "Bệnh viện Quận 12",
    address: "111 Dương Thị Mười, Q.12",
    city: "Ho Chi Minh",
    phone: "028 6250 2632",
    type: "Public",
  },
  {
    id: "hcm71",
    name: "Bệnh viện Thành phố Thủ Đức",
    address: "29 Phú Châu, TP. Thủ Đức",
    city: "Ho Chi Minh",
    phone: "028 2217 1272",
    type: "Public",
  },
  {
    id: "hcm72",
    name: "Bệnh viện Bình Thạnh",
    address: "112AB Đinh Tiên Hoàng, Bình Thạnh",
    city: "Ho Chi Minh",
    phone: "028 3510 8966",
    type: "Public",
  },
  {
    id: "hcm73",
    name: "Bệnh viện Gò Vấp",
    address: "641 Quang Trung, Gò Vấp",
    city: "Ho Chi Minh",
    phone: "028 3894 2641",
    type: "Public",
  },
  {
    id: "hcm74",
    name: "Bệnh viện Tân Bình",
    address: "605 Hoàng Văn Thụ, Tân Bình",
    city: "Ho Chi Minh",
    phone: "028 3844 9928",
    type: "Public",
  },
  {
    id: "hcm75",
    name: "Bệnh viện Tân Phú",
    address: "609 Âu Cơ, Tân Phú",
    city: "Ho Chi Minh",
    phone: "028 3860 8558",
    type: "Public",
  },
  {
    id: "hcm76",
    name: "Bệnh viện Bình Tân",
    address: "809 Hương Lộ 2, Bình Tân",
    city: "Ho Chi Minh",
    phone: "028 3754 2955",
    type: "Public",
  },
  {
    id: "hcm77",
    name: "Bệnh viện Huyện Bình Chánh",
    address: "1 Đường số 1, Bình Chánh",
    city: "Ho Chi Minh",
    phone: "028 3760 2895",
    type: "Public",
  },
  {
    id: "hcm78",
    name: "Bệnh viện Huyện Củ Chi",
    address: "1307 Tỉnh Lộ 7, Củ Chi",
    city: "Ho Chi Minh",
    phone: "028 3794 6443",
    type: "Public",
  },
  {
    id: "hcm79",
    name: "Bệnh viện Huyện Nhà Bè",
    address: "281A Lê Văn Lương, Nhà Bè",
    city: "Ho Chi Minh",
    phone: "028 3786 8213",
    type: "Public",
  },
  {
    id: "hcm80",
    name: "Bệnh viện Huyện Hóc Môn",
    address: "65/2B Bà Triệu, Hóc Môn",
    city: "Ho Chi Minh",
    phone: "028 3891 4208",
    type: "Public",
  },
  {
    id: "hcm81",
    name: "Bệnh viện Huyện Cần Giờ",
    address: "Khu phố Miễu Ba, Cần Giờ",
    city: "Ho Chi Minh",
    phone: "028 3874 0317",
    type: "Public",
  },
  {
    id: "hcm82",
    name: "Bệnh viện Đa khoa Khu vực Hóc Môn",
    address: "65/2B Bà Triệu, Hóc Môn",
    city: "Ho Chi Minh",
    phone: "028 3891 4208",
    type: "Public",
  },
  {
    id: "hcm83",
    name: "Bệnh viện Đa khoa Khu vực Củ Chi",
    address: "Nguyễn Văn Hoài, Củ Chi",
    city: "Ho Chi Minh",
    phone: "028 3892 0583",
    type: "Public",
  },
  {
    id: "hcm84",
    name: "Bệnh viện Đa khoa Khu vực Thủ Đức",
    address: "64 Lê Văn Chí, TP. Thủ Đức",
    city: "Ho Chi Minh",
    phone: "028 3722 3556",
    type: "Public",
  },
  {
    id: "hcm85",
    name: "Trung tâm Y tế Quận 1",
    address: "02 Đặng Trần Côn, Q.1",
    city: "Ho Chi Minh",
    phone: "028 3829 6554",
    type: "Public",
  },
  {
    id: "hcm86",
    name: "Bệnh viện Giao thông Vận tải TP.HCM",
    address: "72/3 Trần Quốc Toản, Q.3",
    city: "Ho Chi Minh",
    phone: "028 3820 6215",
    type: "Public",
  },
  {
    id: "hcm87",
    name: "Bệnh viện Bưu Điện (Cơ sở 2)",
    address: "Lô B9 Thành Thái, Q.10",
    city: "Ho Chi Minh",
    phone: "028 3864 9837",
    type: "Public",
  },
  {
    id: "hcm88",
    name: "Bệnh viện Thẩm mỹ Kangnam",
    address: "666 Cách Mạng Tháng 8, Tân Bình",
    city: "Ho Chi Minh",
    phone: "028 7306 6466",
    type: "Private",
  },
  {
    id: "hcm89",
    name: "Bệnh viện Thẩm mỹ JW Hàn Quốc",
    address: "44 Tôn Thất Tùng, Q.1",
    city: "Ho Chi Minh",
    phone: "0968 681 111",
    type: "Private",
  },
  {
    id: "hcm90",
    name: "Bệnh viện Mắt Việt - Nga",
    address: "1 Đường 3 Tháng 2, Q.10",
    city: "Ho Chi Minh",
    phone: "0931 888 801",
    type: "International",
  },
  {
    id: "hcm91",
    name: "Bệnh viện Quốc tế Minh Anh",
    address: "36 Đường số 1B, Bình Tân",
    city: "Ho Chi Minh",
    phone: "028 6260 0818",
    type: "Private",
  },
  {
    id: "hcm92",
    name: "Bệnh viện Đa khoa Tân Hưng",
    address: "871 Trần Xuân Soạn, Q.7",
    city: "Ho Chi Minh",
    phone: "028 3776 0648",
    type: "Private",
  },
  {
    id: "hcm93",
    name: "Bệnh viện Đa khoa Tâm Trí Sài Gòn",
    address: "171/3 Trường Chinh, Q.12",
    city: "Ho Chi Minh",
    phone: "028 6260 1100",
    type: "Private",
  },
  {
    id: "hcm94",
    name: "Phòng khám ĐK Quốc tế Golden Healthcare",
    address: "37 Hoàng Hoa Thám, Tân Bình",
    city: "Ho Chi Minh",
    phone: "0369 031 818",
    type: "International",
  },
  {
    id: "hcm95",
    name: "Phòng khám Victoria Healthcare",
    address: "37-39 Lương Định Của, Q.2",
    city: "Ho Chi Minh",
    phone: "028 3910 4545",
    type: "International",
  },
  {
    id: "hcm96",
    name: "Phòng khám CarePlus Vietnam",
    address: "Tòa nhà Savico, 66 Tân Đảo, Tân Bình",
    city: "Ho Chi Minh",
    phone: "1800 6116",
    type: "International",
  },
  {
    id: "hcm97",
    name: "Bệnh viện Đa khoa Mỹ Phước",
    address: "Đường TC3, Bến Cát (Giáp ranh)",
    city: "Ho Chi Minh",
    phone: "0274 3535 777",
    type: "Private",
  },
  {
    id: "hcm98",
    name: "Bệnh viện Quân dân Y miền Đông",
    address: "50 Lê Văn Việt, TP. Thủ Đức",
    city: "Ho Chi Minh",
    phone: "028 3896 0054",
    type: "Public",
  },
  {
    id: "hcm99",
    name: "Viện Pasteur TP.HCM",
    address: "167 Pasteur, Q.3",
    city: "Ho Chi Minh",
    phone: "028 3823 0352",
    type: "Public",
  },
  {
    id: "hcm100",
    name: "Trung tâm Kiểm soát bệnh tật TP.HCM (HCDC)",
    address: "366A Âu Dương Lân, Q.8",
    city: "Ho Chi Minh",
    phone: "028 3923 4629",
    type: "Public",
  },

  // --- Hà Nội ---
  {
    id: "hn1",
    name: "Bệnh viện Việt Pháp Hà Nội",
    address: "1 Phương Mai, Đống Đa",
    city: "Ha Noi",
    phone: "024 3577 1100",
    type: "International",
  },
  {
    id: "hn2",
    name: "Bệnh viện Vinmec Times City",
    address: "458 Minh Khai, Hai Bà Trưng",
    city: "Ha Noi",
    phone: "024 3974 3556",
    type: "International",
  },
  {
    id: "hn3",
    name: "Bệnh viện Hồng Ngọc",
    address: "55 Yên Ninh, Ba Đình",
    city: "Ha Noi",
    phone: "024 3927 5568",
    type: "Private",
  },
  {
    id: "hn4",
    name: "Bệnh viện Bạch Mai",
    address: "78 Giải Phóng, Đống Đa",
    city: "Ha Noi",
    phone: "024 3869 3731",
    type: "Public",
  },
  {
    id: "hn5",
    name: "Bệnh viện Hữu Nghị Việt Đức",
    address: "40 Tràng Thi, Hoàn Kiếm",
    city: "Ha Noi",
    phone: "1900 1902",
    type: "Public",
  }, // Cập nhật hotline
  {
    id: "hn6",
    name: "Bệnh viện Thu Cúc",
    address: "286 Thụy Khuê, Tây Hồ",
    city: "Ha Noi",
    phone: "1900 5588 92",
    type: "Private",
  },
  {
    id: "hn7",
    name: "Bệnh viện Trung ương Quân đội 108",
    address: "1 Trần Hưng Đạo, Hai Bà Trưng",
    city: "Ha Noi",
    phone: "1900 9868",
    type: "Public",
  }, // Cập nhật hotline
  {
    id: "hn8",
    name: "Bệnh viện K (Cơ sở 1)",
    address: "43 Quán Sứ, Hoàn Kiếm",
    city: "Ha Noi",
    phone: "1900 886 684",
    type: "Public",
  }, // Cập nhật hotline
  {
    id: "hn9",
    name: "Bệnh viện Phụ sản Hà Nội",
    address: "929 La Thành, Ba Đình",
    city: "Ha Noi",
    phone: "1900 6922",
    type: "Public",
  },
  {
    id: "hn10",
    name: "Bệnh viện Đa khoa Tâm Anh",
    address: "108 Hoàng Như Tiếp, Long Biên",
    city: "Ha Noi",
    phone: "1800 6858",
    type: "Private",
  },
  {
    id: "hn11",
    name: "Bệnh viện Nhi Trung ương",
    address: "18/879 La Thành, Đống Đa",
    city: "Ha Noi",
    phone: "024 6273 8532",
    type: "Public",
  },
  {
    id: "hn12",
    name: "Bệnh viện Mắt Trung ương",
    address: "85 Bà Triệu, Hai Bà Trưng",
    city: "Ha Noi",
    phone: "024 3826 3961",
    type: "Public",
  },
  {
    id: "hn13",
    name: "Bệnh viện Răng Hàm Mặt Trung ương",
    address: "40A Tràng Thi, Hoàn Kiếm",
    city: "Ha Noi",
    phone: "024 3826 8531",
    type: "Public",
  },
  {
    id: "hn14",
    name: "Bệnh viện Y học cổ truyền Trung ương",
    address: "29 Nguyễn Bình Khiêm, Hai Bà Trưng",
    city: "Ha Noi",
    phone: "024 3822 4081",
    type: "Public",
  },
  {
    id: "hn15",
    name: "Bệnh viện Da liễu Trung ương",
    address: "15A Phương Mai, Đống Đa",
    city: "Ha Noi",
    phone: "024 3222 2944",
    type: "Public",
  },
  {
    id: "hn16",
    name: "Bệnh viện Lão khoa Trung ương",
    address: "1A Phương Mai, Đống Đa",
    city: "Ha Noi",
    phone: "024 3576 3476",
    type: "Public",
  },
  {
    id: "hn17",
    name: "Bệnh viện Tim Hà Nội",
    address: "92 Trần Hưng Đạo, Hoàn Kiếm",
    city: "Ha Noi",
    phone: "024 3942 2430",
    type: "Public",
  },
  {
    id: "hn18",
    name: "Bệnh viện Thanh Nhàn",
    address: "42 Thanh Nhàn, Hai Bà Trưng",
    city: "Ha Noi",
    phone: "024 3971 4363",
    type: "Public",
  },
  {
    id: "hn19",
    name: "Bệnh viện Saint Paul (Xanh Pôn)",
    address: "12 Chu Văn An, Ba Đình",
    city: "Ha Noi",
    phone: "024 3823 3075",
    type: "Public",
  },
  {
    id: "hn20",
    name: "Bệnh viện Quân y 354",
    address: "8 Phùng Hưng, Hà Đông",
    city: "Ha Noi",
    phone: "024 3353 3544",
    type: "Public",
  },
  {
    id: "hn21",
    name: "Bệnh viện Hữu Nghị",
    address: "1 Trần Khánh Dư, Hai Bà Trưng",
    city: "Ha Noi",
    phone: "024 3972 2231",
    type: "Public",
  },
  {
    id: "hn22",
    name: "Bệnh viện E",
    address: "89 Trần Cung, Cầu Giấy",
    city: "Ha Noi",
    phone: "024 3754 3650",
    type: "Public",
  },
  {
    id: "hn23",
    name: "Bệnh viện 19-8 (Bộ Công An)",
    address: "9 Trần Bình, Cầu Giấy",
    city: "Ha Noi",
    phone: "024 3768 2607",
    type: "Public",
  },
  {
    id: "hn24",
    name: "Bệnh viện Quân y 103",
    address: "261 Phùng Hưng, Hà Đông",
    city: "Ha Noi",
    phone: "024 3356 6713",
    type: "Public",
  },
  {
    id: "hn25",
    name: "Viện Bỏng Quốc gia Lê Hữu Trác",
    address: "263 Phùng Hưng, Hà Đông",
    city: "Ha Noi",
    phone: "024 3352 7999",
    type: "Public",
  },
  {
    id: "hn26",
    name: "Bệnh viện Phụ sản Trung ương",
    address: "43 Tràng Thi, Hoàn Kiếm",
    city: "Ha Noi",
    phone: "1900 575 747",
    type: "Public",
  }, // Cập nhật hotline
  {
    id: "hn27",
    name: "Bệnh viện Tai Mũi Họng Trung ương",
    address: "78 Giải Phóng, Đống Đa",
    city: "Ha Noi",
    phone: "024 3868 6050",
    type: "Public",
  },
  {
    id: "hn28",
    name: "Bệnh viện Nội tiết Trung ương (CS2)",
    address: "Tứ Hiệp, Thanh Trì",
    city: "Ha Noi",
    phone: "024 3853 3527",
    type: "Public",
  },
  {
    id: "hn29",
    name: "Bệnh viện Bệnh Nhiệt đới Trung ương (CS2)",
    address: "Kim Chung, Đông Anh",
    city: "Ha Noi",
    phone: "1900 3228",
    type: "Public",
  }, // Cập nhật hotline
  {
    id: "hn30",
    name: "Bệnh viện Phổi Trung ương",
    address: "463 Hoàng Hoa Thám, Ba Đình",
    city: "Ha Noi",
    phone: "024 3832 6249",
    type: "Public",
  },
  {
    id: "hn31",
    name: "Viện Huyết học - Truyền máu Trung ương",
    address: "Phạm Văn Bạch, Cầu Giấy",
    city: "Ha Noi",
    phone: "0976 990 066",
    type: "Public",
  },
  {
    id: "hn32",
    name: "Bệnh viện Đa khoa Đống Đa",
    address: "180 Nguyễn Lương Bằng, Đống Đa",
    city: "Ha Noi",
    phone: "024 3851 7999",
    type: "Public",
  },
  {
    id: "hn33",
    name: "Bệnh viện Đa khoa Hà Đông",
    address: "2 Bế Văn Đàn, Hà Đông",
    city: "Ha Noi",
    phone: "024 3352 4555",
    type: "Public",
  },
  {
    id: "hn34",
    name: "Bệnh viện Đa khoa Đức Giang",
    address: "54 Trường Lâm, Long Biên",
    city: "Ha Noi",
    phone: "1900 292919",
    type: "Public",
  }, // Cập nhật hotline
  {
    id: "hn35",
    name: "Bệnh viện Thanh Nhàn",
    address: "42 Thanh Nhàn, Hai Bà Trưng",
    city: "Ha Noi",
    phone: "024 3971 4363",
    type: "Public",
  }, // Trùng lặp, giữ lại để đảm bảo ID
  {
    id: "hn36",
    name: "Bệnh viện Ung bướu Hà Nội",
    address: "42A Thanh Nhàn, Hai Bà Trưng",
    city: "Ha Noi",
    phone: "024 3971 7481",
    type: "Public",
  },
  {
    id: "hn37",
    name: "Bệnh viện Tâm thần Hà Nội",
    address: "Sài Đồng, Long Biên",
    city: "Ha Noi",
    phone: "024 3875 6314",
    type: "Public",
  },
  {
    id: "hn38",
    name: "Bệnh viện Phổi Hà Nội",
    address: "44 Thanh Nhàn, Hai Bà Trưng",
    city: "Ha Noi",
    phone: "024 3971 5209",
    type: "Public",
  },
  {
    id: "hn39",
    name: "Bệnh viện Mắt Hà Nội",
    address: "37 Hai Bà Trưng, Hoàn Kiếm",
    city: "Ha Noi",
    phone: "024 3825 2376",
    type: "Public",
  },
  {
    id: "hn40",
    name: "Bệnh viện Da liễu Hà Nội",
    address: "79B Nguyễn Khuyến, Đống Đa",
    city: "Ha Noi",
    phone: "0903 479 619",
    type: "Public",
  }, // Cập nhật hotline
  {
    id: "hn41",
    name: "Bệnh viện Thận Hà Nội",
    address: "70 Nguyễn Chí Thanh, Đống Đa",
    city: "Ha Noi",
    phone: "024 3773 2439",
    type: "Public",
  },
  {
    id: "hn42",
    name: "Bệnh viện Y học cổ truyền Hà Nội",
    address: "8 Phạm Hùng, Cầu Giấy",
    city: "Ha Noi",
    phone: "024 3768 4059",
    type: "Public",
  },
  {
    id: "hn43",
    name: "Bệnh viện Giao thông Vận tải",
    address: "84 Chùa Láng, Đống Đa",
    city: "Ha Noi",
    phone: "024 3766 4751",
    type: "Public",
  },
  {
    id: "hn44",
    name: "Bệnh viện Bưu Điện",
    address: "49 Trần Điền, Hoàng Mai",
    city: "Ha Noi",
    phone: "024 3640 2308",
    type: "Public",
  },
  {
    id: "hn45",
    name: "Bệnh viện Xây Dựng",
    address: "Nguyễn Quý Đức, Thanh Xuân",
    city: "Ha Noi",
    phone: "024 3854 1004",
    type: "Public",
  },
  {
    id: "hn46",
    name: "Bệnh viện 354 (Tổng cục Hậu cần)",
    address: "120 Đốc Ngữ, Ba Đình",
    city: "Ha Noi",
    phone: "024 3832 7554",
    type: "Public",
  },
  {
    id: "hn47",
    name: "Bệnh viện Đa khoa An Việt",
    address: "1E Trường Chinh, Thanh Xuân",
    city: "Ha Noi",
    phone: "1900 2838",
    type: "Private",
  },
  {
    id: "hn48",
    name: "Bệnh viện Đa khoa Bảo Sơn 2",
    address: "52 Nguyễn Chí Thanh, Đống Đa",
    city: "Ha Noi",
    phone: "1900 599 858",
    type: "Private",
  },
  {
    id: "hn49",
    name: "Bệnh viện Đa khoa Hà Thành",
    address: "61 Vũ Thạnh, Đống Đa",
    city: "Ha Noi",
    phone: "024 3765 5599",
    type: "Private",
  },
  {
    id: "hn50",
    name: "Bệnh viện Đa khoa Trí Đức",
    address: "219 Lê Duẩn, Hai Bà Trưng",
    city: "Ha Noi",
    phone: "024 3942 9999",
    type: "Private",
  },
  {
    id: "hn51",
    name: "Bệnh viện Đa khoa Phương Đông",
    address: "9 Phố Viên, Bắc Từ Liêm",
    city: "Ha Noi",
    phone: "1900 1806",
    type: "Private",
  },
  {
    id: "hn52",
    name: "Bệnh viện Đa khoa Medlatec",
    address: "42 Nghĩa Dũng, Ba Đình",
    city: "Ha Noi",
    phone: "1900 565 656",
    type: "Private",
  },
  {
    id: "hn53",
    name: "Bệnh viện Mắt Quốc tế DND",
    address: "128 Bùi Thị Xuân, Hai Bà Trưng",
    city: "Ha Noi",
    phone: "1900 6966",
    type: "Private",
  },
  {
    id: "hn54",
    name: "Bệnh viện Mắt Kỹ thuật cao Hà Nội",
    address: "51 Trần Nhân Tông, Hai Bà Trưng",
    city: "Ha Noi",
    phone: "024 3943 1736",
    type: "Private",
  },
  {
    id: "hn55",
    name: "Bệnh viện Mắt Việt Nhật",
    address: "122 Triệu Việt Vương, Hai Bà Trưng",
    city: "Ha Noi",
    phone: "024 3974 3636",
    type: "International",
  },
  {
    id: "hn56",
    name: "Bệnh viện Mắt Sài Gòn - Hà Nội",
    address: "77 Nguyễn Du, Hai Bà Trưng",
    city: "Ha Noi",
    phone: "024 3942 8554",
    type: "Private",
  },
  {
    id: "hn57",
    name: "Bệnh viện Ung bướu Hưng Việt",
    address: "34 Đại Cồ Việt, Hai Bà Trưng",
    city: "Ha Noi",
    phone: "094 230 0707",
    type: "Private",
  },
  {
    id: "hn58",
    name: "Bệnh viện Nam học và Hiếm muộn Hà Nội",
    address: "431 Tam Trinh, Hoàng Mai",
    city: "Ha Noi",
    phone: "024 3634 3636",
    type: "Private",
  },
  {
    id: "hn59",
    name: "Bệnh viện Thẩm mỹ Kangnam Hà Nội",
    address: "190 Trường Chinh, Đống Đa",
    city: "Ha Noi",
    phone: "024 7300 6466",
    type: "Private",
  },
  {
    id: "hn60",
    name: "Bệnh viện Đa khoa Quốc tế Bắc Hà",
    address: "137 Nguyễn Văn Cừ, Long Biên",
    city: "Ha Noi",
    phone: "1900 8083",
    type: "International",
  },
  {
    id: "hn61",
    name: "Bệnh viện Đa khoa Y học cổ truyền Hà Nội",
    address: "8 Phạm Hùng, Cầu Giấy",
    city: "Ha Noi",
    phone: "024 3768 4059",
    type: "Public",
  },
  {
    id: "hn62",
    name: "Bệnh viện Đa khoa Hòe Nhai",
    address: "17 Hòe Nhai, Ba Đình",
    city: "Ha Noi",
    phone: "024 3927 2957",
    type: "Public",
  },
  {
    id: "hn63",
    name: "Bệnh viện Đa khoa YHCT Quân đội",
    address: "442 Kim Giang, Hoàng Mai",
    city: "Ha Noi",
    phone: "024 3858 3135",
    type: "Public",
  },
  {
    id: "hn64",
    name: "Bệnh viện Đa khoa Nông nghiệp",
    address: "Km 13+500 Quốc lộ 1A, Thanh Trì",
    city: "Ha Noi",
    phone: "024 3686 1116",
    type: "Public",
  },
  {
    id: "hn65",
    name: "Bệnh viện Đa khoa Gia Lâm",
    address: "Khu đô thị Trâu Quỳ, Gia Lâm",
    city: "Ha Noi",
    phone: "024 3876 5656",
    type: "Public",
  },
  {
    id: "hn66",
    name: "Bệnh viện Đa khoa Đông Anh",
    address: "Tổ 1, Thị trấn Đông Anh",
    city: "Ha Noi",
    phone: "024 3883 2432",
    type: "Public",
  },
  {
    id: "hn67",
    name: "Bệnh viện Đa khoa Sóc Sơn",
    address: "Thị trấn Sóc Sơn, Sóc Sơn",
    city: "Ha Noi",
    phone: "024 3884 3505",
    type: "Public",
  },
  {
    id: "hn68",
    name: "Bệnh viện Đa khoa Thường Tín",
    address: "Thị trấn Thường Tín, Thường Tín",
    city: "Ha Noi",
    phone: "024 3385 3244",
    type: "Public",
  },
  {
    id: "hn69",
    name: "Bệnh viện Đa khoa Hoài Đức",
    address: "Thôn Lũng Kênh, Hoài Đức",
    city: "Ha Noi",
    phone: "024 3366 3632",
    type: "Public",
  },
  {
    id: "hn70",
    name: "Bệnh viện Đa khoa Quốc Oai",
    address: "Thị trấn Quốc Oai, Quốc Oai",
    city: "Ha Noi",
    phone: "024 3384 3115",
    type: "Public",
  },
  {
    id: "hn71",
    name: "Bệnh viện Đa khoa Chương Mỹ",
    address: "Thị trấn Chúc Sơn, Chương Mỹ",
    city: "Ha Noi",
    phone: "024 3386 6489",
    type: "Public",
  },
  {
    id: "hn72",
    name: "Bệnh viện Đa khoa Ba Vì",
    address: "Thị trấn Tây Đằng, Ba Vì",
    city: "Ha Noi",
    phone: "024 3386 3113",
    type: "Public",
  },
  {
    id: "hn73",
    name: "Bệnh viện Đa khoa Sơn Tây",
    address: "Lê Lợi, Thị xã Sơn Tây",
    city: "Ha Noi",
    phone: "024 3383 2343",
    type: "Public",
  },
  {
    id: "hn74",
    name: "Bệnh viện Tâm thần Mỹ Đức",
    address: "Phúc Lâm, Mỹ Đức",
    city: "Ha Noi",
    phone: "024 3384 7664",
    type: "Public",
  },
  {
    id: "hn75",
    name: "Bệnh viện Tâm thần Ban ngày Mai Hương",
    address: "4 Hồng Mai, Hai Bà Trưng",
    city: "Ha Noi",
    phone: "024 3976 2505",
    type: "Public",
  },
  {
    id: "hn76",
    name: "Bệnh viện Đa khoa Việt Nam - Cuba",
    address: "37 Hai Bà Trưng, Hoàn Kiếm",
    city: "Ha Noi",
    phone: "024 3825 3369",
    type: "Public",
  },
  {
    id: "hn77",
    name: "Bệnh viện Hữu nghị Việt Xô",
    address: "1 Trần Khánh Dư, Hai Bà Trưng",
    city: "Ha Noi",
    phone: "024 3972 2231",
    type: "Public",
  },
  {
    id: "hn78",
    name: "Bệnh viện Đa khoa Hồng Hà",
    address: "16 Nguyễn Như Đổ, Đống Đa",
    city: "Ha Noi",
    phone: "1900 633 988",
    type: "Private",
  },
  {
    id: "hn79",
    name: "Bệnh viện Mắt Việt - Nhật",
    address: "122 Triệu Việt Vương, Hai Bà Trưng",
    city: "Ha Noi",
    phone: "024 3974 3636",
    type: "International",
  },
  {
    id: "hn80",
    name: "Bệnh viện Đa khoa Quốc tế Thiên Đức",
    address: "207 Phùng Hưng, Hà Đông",
    city: "Ha Noi",
    phone: "024 3352 1435",
    type: "Private",
  },
  {
    id: "hn81",
    name: "Bệnh viện Thể thao Việt Nam",
    address: "Đỗ Xuân Hợp, Nam Từ Liêm",
    city: "Ha Noi",
    phone: "024 3785 5188",
    type: "Public",
  },
  {
    id: "hn82",
    name: "Viện Sốt rét - Ký sinh trùng - Côn trùng TW",
    address: "245 Lương Thế Vinh, Nam Từ Liêm",
    city: "Ha Noi",
    phone: "024 3854 3034",
    type: "Public",
  },
  {
    id: "hn83",
    name: "Viện Y học biển",
    address: "Trần Khánh Dư, Hai Bà Trưng",
    city: "Ha Noi",
    phone: "024 3971 7891",
    type: "Public",
  },
  {
    id: "hn84",
    name: "Trung tâm Y tế Dự phòng Hà Nội",
    address: "70 Nguyễn Chí Thanh, Đống Đa",
    city: "Ha Noi",
    phone: "024 3773 0178",
    type: "Public",
  },
  {
    id: "hn85",
    name: "Bệnh viện Đa khoa Thanh Trì",
    address: "Tứ Hiệp, Thanh Trì",
    city: "Ha Noi",
    phone: "024 3861 5304",
    type: "Public",
  },
  {
    id: "hn86",
    name: "Bệnh viện Đa khoa Mê Linh",
    address: "Thạch Đà, Mê Linh",
    city: "Ha Noi",
    phone: "024 3818 2004",
    type: "Public",
  },
  {
    id: "hn87",
    name: "Bệnh viện Đa khoa Phúc Thọ",
    address: "Thị trấn Phúc Thọ, Phúc Thọ",
    city: "Ha Noi",
    phone: "024 3364 2253",
    type: "Public",
  },
  {
    id: "hn88",
    name: "Bệnh viện Đa khoa Thạch Thất",
    address: "Kim Quan, Thạch Thất",
    city: "Ha Noi",
    phone: "024 3384 2255",
    type: "Public",
  },
  {
    id: "hn89",
    name: "Bệnh viện Đa khoa Vân Đình",
    address: "Vân Đình, Ứng Hòa",
    city: "Ha Noi",
    phone: "024 3388 2235",
    type: "Public",
  },
  {
    id: "hn90",
    name: "Bệnh viện Đa khoa Mỹ Đức",
    address: "Đại Nghĩa, Mỹ Đức",
    city: "Ha Noi",
    phone: "024 3384 7226",
    type: "Public",
  },
  {
    id: "hn91",
    name: "Bệnh viện Đa khoa Quốc tế Bắc Hà",
    address: "137 Nguyễn Văn Cừ, Long Biên",
    city: "Ha Noi",
    phone: "0986 343 333",
    type: "International",
  },
  {
    id: "hn92",
    name: "Bệnh viện Dolife",
    address: "108 Nguyễn Hoàng, Nam Từ Liêm",
    city: "Ha Noi",
    phone: "1900 1984",
    type: "International",
  },
  {
    id: "hn93",
    name: "Bệnh viện Mắt Alina",
    address: "MIMOSA, Ecopark (Giáp ranh)",
    city: "Ha Noi",
    phone: "0866 224 883",
    type: "Private",
  },
  {
    id: "hn94",
    name: "Phòng khám ĐK Quốc tế VietSing",
    address: "83B Lý Thường Kiệt, Hoàn Kiếm",
    city: "Ha Noi",
    phone: "024 3943 8888",
    type: "International",
  },
  {
    id: "hn95",
    name: "Phòng khám Family Medical Practice Hanoi",
    address: "298 I Kim Mã, Ba Đình",
    city: "Ha Noi",
    phone: "024 3843 0748",
    type: "International",
  },
  {
    id: "hn96",
    name: "Bệnh viện Đa khoa Hà Nội High Tech",
    address: "51 Trần Nhân Tông, Hai Bà Trưng",
    city: "Ha Noi",
    phone: "024 3943 1736",
    type: "Private",
  },
  {
    id: "hn97",
    name: "Trung tâm Y tế Quận Tây Hồ",
    address: "Xuân La, Tây Hồ",
    city: "Ha Noi",
    phone: "024 3753 2345",
    type: "Public",
  },
  {
    id: "hn98",
    name: "Trung tâm Y tế Quận Cầu Giấy",
    address: "26 Mai Dịch, Cầu Giấy",
    city: "Ha Noi",
    phone: "024 3768 0014",
    type: "Public",
  },
  {
    id: "hn99",
    name: "Trung tâm Y tế Quận Thanh Xuân",
    address: "23 Khuất Duy Tiến, Thanh Xuân",
    city: "Ha Noi",
    phone: "024 3858 2269",
    type: "Public",
  },
  {
    id: "hn100",
    name: "Trung tâm Kiểm soát bệnh tật Hà Nội (CDC)",
    address: "70 Nguyễn Chí Thanh, Đống Đa",
    city: "Ha Noi",
    phone: "024 3773 0268",
    type: "Public",
  },

  // --- Đà Nẵng ---
  {
    id: "dn1",
    name: "Bệnh viện Hoàn Mỹ Đà Nẵng",
    address: "291 Nguyễn Văn Linh, Thanh Khê",
    city: "Da Nang",
    phone: "0236 3650 676",
    type: "Private",
  },
  {
    id: "dn2",
    name: "Bệnh viện Vinmec Đà Nẵng",
    address: "Đường 30 tháng 4, Hải Châu",
    city: "Da Nang",
    phone: "0236 3711 111",
    type: "International",
  },
  {
    id: "dn3",
    name: "Bệnh viện Đa khoa Đà Nẵng",
    address: "124 Hải Phòng, Thạch Thang",
    city: "Da Nang",
    phone: "0236 3821 118",
    type: "Public",
  },
  {
    id: "dn4",
    name: "Bệnh viện Gia Đình (Family Hospital)",
    address: "73 Nguyễn Hữu Thọ",
    city: "Da Nang",
    phone: "1900 2250",
    type: "Private",
  },
  {
    id: "dn5",
    name: "Bệnh viện C Đà Nẵng",
    address: "122 Hải Phòng, Hải Châu",
    city: "Da Nang",
    phone: "0236 3822 971",
    type: "Public",
  },
  {
    id: "dn6",
    name: "Bệnh viện Phụ sản - Nhi Đà Nẵng",
    address: "402 Lê Văn Hiến, Ngũ Hành Sơn",
    city: "Da Nang",
    phone: "0236 3957 777",
    type: "Public",
  },
  {
    id: "dn7",
    name: "Bệnh viện Chỉnh hình và Phục hồi chức năng",
    address: "19 Ông Ích Khiêm, Hải Châu",
    city: "Da Nang",
    phone: "0236 3822 147",
    type: "Public",
  },
  {
    id: "dn8",
    name: "Bệnh viện Răng Hàm Mặt Đà Nẵng",
    address: "146 Hải Phòng, Hải Châu",
    city: "Da Nang",
    phone: "0236 3819 870",
    type: "Public",
  },
  {
    id: "dn9",
    name: "Bệnh viện Mắt Đà Nẵng",
    address: "376 Nguyễn Văn Linh, Thanh Khê",
    city: "Da Nang",
    phone: "0236 3651 888",
    type: "Public",
  },
  {
    id: "dn10",
    name: "Bệnh viện Đa khoa Tâm Trí Đà Nẵng",
    address: "64 Cách Mạng Tháng 8, Hải Châu",
    city: "Da Nang",
    phone: "0236 3568 888",
    type: "Private",
  },
  {
    id: "dn11",
    name: "Bệnh viện Ung bướu Đà Nẵng",
    address: "Tổ 78, Phường Hoà Minh, Liên Chiểu",
    city: "Da Nang",
    phone: "0236 3717 717",
    type: "Public",
  },
  {
    id: "dn12",
    name: "Bệnh viện 199 (Bộ Công An)",
    address: "216 Nguyễn Công Trứ, Sơn Trà",
    city: "Da Nang",
    phone: "1900 986 868",
    type: "Public",
  },
  {
    id: "dn13",
    name: "Bệnh viện Quân y 17",
    address: "2 Nguyễn Hữu Thọ, Hải Châu",
    city: "Da Nang",
    phone: "0236 3821 217",
    type: "Public",
  },
  {
    id: "dn14",
    name: "Bệnh viện Da liễu Đà Nẵng",
    address: "91 Dũng Sĩ Thanh Khê, Thanh Khê",
    city: "Da Nang",
    phone: "0236 3756 951",
    type: "Public",
  },
  {
    id: "dn15",
    name: "Bệnh viện Y học cổ truyền Đà Nẵng",
    address: "9 Trần Thủ Độ, Cẩm Lệ",
    city: "Da Nang",
    phone: "0236 3696 123",
    type: "Public",
  },
  {
    id: "dn16",
    name: "Bệnh viện Tâm thần Đà Nẵng",
    address: "193 Nguyễn Lương Bằng, Liên Chiểu",
    city: "Da Nang",
    phone: "0236 3842 326",
    type: "Public",
  },
  {
    id: "dn17",
    name: "Bệnh viện Phổi Đà Nẵng",
    address: "Phước Lý, Liên Chiểu",
    city: "Da Nang",
    phone: "0236 3766 828",
    type: "Public",
  },
  {
    id: "dn18",
    name: "Bệnh viện Giao thông Vận tải Đà Nẵng",
    address: "68 Hoàng Văn Thái, Liên Chiểu",
    city: "Da Nang",
    phone: "0236 3764 764",
    type: "Public",
  },
  {
    id: "dn19",
    name: "Trung tâm Y tế Quận Hải Châu",
    address: "38 Cao Thắng, Hải Châu",
    city: "Da Nang",
    phone: "0236 3822 595",
    type: "Public",
  },
  {
    id: "dn20",
    name: "Trung tâm Y tế Quận Thanh Khê",
    address: "K62/32 Hà Huy Tập, Thanh Khê",
    city: "Da Nang",
    phone: "0236 3720 720",
    type: "Public",
  },
  {
    id: "dn21",
    name: "Trung tâm Y tế Quận Sơn Trà",
    address: "1118 Ngô Quyền, Sơn Trà",
    city: "Da Nang",
    phone: "0236 3831 215",
    type: "Public",
  },
  {
    id: "dn22",
    name: "Trung tâm Y tế Quận Ngũ Hành Sơn",
    address: "582 Lê Văn Hiến, Ngũ Hành Sơn",
    city: "Da Nang",
    phone: "0236 3847 282",
    type: "Public",
  },
  {
    id: "dn23",
    name: "Trung tâm Y tế Quận Liên Chiểu",
    address: "525 Tôn Đức Thắng, Liên Chiểu",
    city: "Da Nang",
    phone: "0236 3841 684",
    type: "Public",
  },
  {
    id: "dn24",
    name: "Trung tâm Y tế Quận Cẩm Lệ",
    address: "105 Nguyễn Nhàn, Cẩm Lệ",
    city: "Da Nang",
    phone: "0236 3672 210",
    type: "Public",
  },
  {
    id: "dn25",
    name: "Trung tâm Y tế Huyện Hòa Vang",
    address: "Thôn Thạch Nham Đông, Hòa Vang",
    city: "Da Nang",
    phone: "0236 3784 115",
    type: "Public",
  },
  {
    id: "dn26",
    name: "Bệnh viện Mắt Quốc tế Sài Gòn - Đà Nẵng",
    address: "357 Lê Duẩn, Hải Châu",
    city: "Da Nang",
    phone: "0236 3752 426",
    type: "Private",
  },
  {
    id: "dn27",
    name: "Phòng khám Đa khoa Thiện Nhân",
    address: "276 Đống Đa, Hải Châu",
    city: "Da Nang",
    phone: "0236 3568 988",
    type: "Private",
  },
  {
    id: "dn28",
    name: "Phòng khám Đa khoa Pasteur",
    address: "Lô 19 Nguyễn Tường Phổ, Liên Chiểu",
    city: "Da Nang",
    phone: "0236 3811 868",
    type: "Private",
  },
  {
    id: "dn29",
    name: "Bệnh viện Bình Dân Đà Nẵng",
    address: "376 Trần Cao Vân, Thanh Khê",
    city: "Da Nang",
    phone: "0236 3714 030",
    type: "Private",
  },
  {
    id: "dn30",
    name: "Bệnh viện Đa khoa Vĩnh Toàn",
    address: "49 Lê Duẩn, Hải Châu",
    city: "Da Nang",
    phone: "0236 3823 839",
    type: "Private",
  },

  // --- Cần Thơ ---
  {
    id: "ct1",
    name: "Bệnh viện Đa khoa Quốc tế SIS Cần Thơ",
    address: "397 Nguyễn Văn Cừ, An Bình",
    city: "Can Tho",
    phone: "1800 1115",
    type: "International",
  },
  {
    id: "ct2",
    name: "Bệnh viện Đa khoa Trung ương Cần Thơ",
    address: "315 Nguyễn Văn Linh",
    city: "Can Tho",
    phone: "0292 3820 071",
    type: "Public",
  },
  {
    id: "ct3",
    name: "Bệnh viện Đa khoa Hoàn Mỹ Cần Thơ",
    address: "951 Nguyễn Văn Cừ, An Bình",
    city: "Can Tho",
    phone: "0292 3766 888",
    type: "Private",
  },
  {
    id: "ct4",
    name: "Bệnh viện Phụ sản Cần Thơ",
    address: "479 Nguyễn Văn Cừ, An Bình",
    city: "Can Tho",
    phone: "0292 3739 639",
    type: "Public",
  },
  {
    id: "ct5",
    name: "Bệnh viện Nhi đồng Cần Thơ",
    address: "345 Nguyễn Văn Cừ, An Bình",
    city: "Can Tho",
    phone: "0292 3819 767",
    type: "Public",
  },
  {
    id: "ct6",
    name: "Bệnh viện Da liễu Cần Thơ",
    address: "199B Nguyễn Văn Cừ, An Bình",
    city: "Can Tho",
    phone: "0292 3820 091",
    type: "Public",
  },
  {
    id: "ct7",
    name: "Bệnh viện Y học cổ truyền Cần Thơ",
    address: "144 Nguyễn Thái Học, An Cư",
    city: "Can Tho",
    phone: "0292 3820 322",
    type: "Public",
  },
  {
    id: "ct8",
    name: "Bệnh viện Mắt Cần Thơ",
    address: "284 Nguyễn Văn Cừ, An Bình",
    city: "Can Tho",
    phone: "0292 3821 728",
    type: "Public",
  },
  {
    id: "ct9",
    name: "Bệnh viện Ung bướu Cần Thơ",
    address: "315 Nguyễn Văn Linh",
    city: "Can Tho",
    phone: "0292 3737 999",
    type: "Public",
  },
  {
    id: "ct10",
    name: "Bệnh viện Chấn thương Chỉnh hình Cần Thơ",
    address: "418 Nguyễn Văn Cừ, An Bình",
    city: "Can Tho",
    phone: "0292 3827 468",
    type: "Public",
  },
  {
    id: "ct11",
    name: "Bệnh viện Đa khoa Thành phố Cần Thơ",
    address: "4 Châu Văn Liêm, Ninh Kiều",
    city: "Can Tho",
    phone: "0292 3821 235",
    type: "Public",
  },
  {
    id: "ct12",
    name: "Bệnh viện Quân y 121",
    address: "1 Đường 30/4, Ninh Kiều",
    city: "Can Tho",
    phone: "0292 3820 625",
    type: "Public",
  },
  {
    id: "ct13",
    name: "Bệnh viện Tim mạch Cần Thơ",
    address: "204 Trần Hưng Đạo, Ninh Kiều",
    city: "Can Tho",
    phone: "0292 3833 333",
    type: "Public",
  },
  {
    id: "ct14",
    name: "Bệnh viện Lao và Bệnh phổi Cần Thơ",
    address: "Quốc lộ 91B, Bình Thủy",
    city: "Can Tho",
    phone: "0292 3841 577",
    type: "Public",
  },
  {
    id: "ct15",
    name: "Bệnh viện Huyết học Truyền máu Cần Thơ",
    address: "315 Nguyễn Văn Linh, Ninh Kiều",
    city: "Can Tho",
    phone: "0292 3844 766",
    type: "Public",
  },
  {
    id: "ct16",
    name: "Bệnh viện Tâm thần Cần Thơ",
    address: "Thới Thạnh, Ô Môn",
    city: "Can Tho",
    phone: "0292 3663 333",
    type: "Public",
  },
  {
    id: "ct17",
    name: "Bệnh viện Đại học Y Dược Cần Thơ",
    address: "179 Nguyễn Văn Cừ, Ninh Kiều",
    city: "Can Tho",
    phone: "0292 3899 444",
    type: "Public",
  },
  {
    id: "ct18",
    name: "Bệnh viện Quốc tế Phương Châu",
    address: "300 Nguyễn Văn Cừ, Ninh Kiều",
    city: "Can Tho",
    phone: "1900 5454 66",
    type: "International",
  },
  {
    id: "ct19",
    name: "Bệnh viện Đa khoa Tâm Minh Đức",
    address: "551 Trần Quang Diệu, Bình Thủy",
    city: "Can Tho",
    phone: "0292 3841 818",
    type: "Private",
  },
  {
    id: "ct20",
    name: "Trung tâm Y tế Quận Ninh Kiều",
    address: "106 Cách Mạng Tháng 8, Ninh Kiều",
    city: "Can Tho",
    phone: "0292 3822 366",
    type: "Public",
  },

  // --- Hải Phòng ---
  {
    id: "hp1",
    name: "Bệnh viện Hữu nghị Việt Tiệp",
    address: "1 Nhà thương, Lạch Tray, Ngô Quyền",
    city: "Hai Phong",
    phone: "0225 3825 261",
    type: "Public",
  },
  {
    id: "hp2",
    name: "Bệnh viện Trẻ em Hải Phòng",
    address: "55 Lạch Tray, Ngô Quyền",
    city: "Hai Phong",
    phone: "0225 3747 676",
    type: "Public",
  },
  {
    id: "hp3",
    name: "Bệnh viện Đa khoa Quốc tế Hải Phòng",
    address: "124 Nguyễn Đức Cảnh, Lê Chân",
    city: "Hai Phong",
    phone: "0225 3955 888",
    type: "International",
  },
  {
    id: "hp4",
    name: "Bệnh viện Phụ sản Hải Phòng",
    address: "19 Trần Quang Khải, Hồng Bàng",
    city: "Hai Phong",
    phone: "0225 3745 128",
    type: "Public",
  },
  {
    id: "hp5",
    name: "Bệnh viện Kiến An",
    address: "35 Trần Tất Văn, Kiến An",
    city: "Hai Phong",
    phone: "0225 3876 215",
    type: "Public",
  },
  {
    id: "hp6",
    name: "Bệnh viện Đa khoa Quốc tế Vinmec Hải Phòng",
    address: "Võ Nguyên Giáp, Lê Chân",
    city: "Hai Phong",
    phone: "0225 7309 888",
    type: "International",
  },
  {
    id: "hp7",
    name: "Bệnh viện Quốc tế Green",
    address: "738 Nguyễn Văn Linh, Lê Chân",
    city: "Hai Phong",
    phone: "0225 3786 555",
    type: "International",
  },
  {
    id: "hp8",
    name: "Bệnh viện Đại học Y Hải Phòng",
    address: "225C Lạch Tray, Ngô Quyền",
    city: "Hai Phong",
    phone: "0225 3736 285",
    type: "Public",
  },
  {
    id: "hp9",
    name: "Bệnh viện Y học cổ truyền Hải Phòng",
    address: "2 Trần Bình Trọng, Ngô Quyền",
    city: "Hai Phong",
    phone: "0225 3700 412",
    type: "Public",
  },
  {
    id: "hp10",
    name: "Bệnh viện Mắt Hải Phòng",
    address: "383 Lán Bè, Lê Chân",
    city: "Hai Phong",
    phone: "0225 3717 188",
    type: "Public",
  },
  {
    id: "hp11",
    name: "Bệnh viện Lao và Bệnh phổi Hải Phòng",
    address: "Trần Tất Văn, Kiến An",
    city: "Hai Phong",
    phone: "0225 3876 251",
    type: "Public",
  },
  {
    id: "hp12",
    name: "Bệnh viện Tâm thần Hải Phòng",
    address: "Đông Khê, Ngô Quyền",
    city: "Hai Phong",
    phone: "0225 3725 464",
    type: "Public",
  },
  {
    id: "hp13",
    name: "Bệnh viện Giao thông Vận tải Hải Phòng",
    address: "Hùng Vương, Hồng Bàng",
    city: "Hai Phong",
    phone: "0225 3835 777",
    type: "Public",
  },
  {
    id: "hp14",
    name: "Bệnh viện Đa khoa Huyện Thủy Nguyên",
    address: "Thủy Sơn, Thủy Nguyên",
    city: "Hai Phong",
    phone: "0225 3873 214",
    type: "Public",
  },
  {
    id: "hp15",
    name: "Bệnh viện Đa khoa Huyện An Lão",
    address: "Thị trấn An Lão, An Lão",
    city: "Hai Phong",
    phone: "0225 3872 214",
    type: "Public",
  },
  {
    id: "hp16",
    name: "Bệnh viện Đa khoa Huyện Tiên Lãng",
    address: "Khu 2, Tiên Lãng",
    city: "Hai Phong",
    phone: "0225 3882 227",
    type: "Public",
  },
  {
    id: "hp17",
    name: "Bệnh viện Đa khoa Huyện Vĩnh Bảo",
    address: "Thị trấn Vĩnh Bảo, Vĩnh Bảo",
    city: "Hai Phong",
    phone: "0225 3884 216",
    type: "Public",
  },
  {
    id: "hp18",
    name: "Bệnh viện Đa khoa Quận Đồ Sơn",
    address: "229 Lý Thánh Tông, Đồ Sơn",
    city: "Hai Phong",
    phone: "0225 3861 229",
    type: "Public",
  },
  {
    id: "hp19",
    name: "Bệnh viện Bình Dân Hải Phòng",
    address: "Lê Lợi, Ngô Quyền",
    city: "Hai Phong",
    phone: "0225 3855 777",
    type: "Private",
  },
  {
    id: "hp20",
    name: "Bệnh viện Đa khoa Ngô Quyền",
    address: "21 Lê Lợi, Ngô Quyền",
    city: "Hai Phong",
    phone: "0225 3846 454",
    type: "Public",
  },

  // --- Nha Trang ---
  {
    id: "nt1",
    name: "Bệnh viện Đa khoa tỉnh Khánh Hòa",
    address: "19 Yersin, Nha Trang",
    city: "Nha Trang",
    phone: "0258 3822 361",
    type: "Public",
  },
  {
    id: "nt2",
    name: "Bệnh viện Vinmec Nha Trang",
    address: "42A Trần Phú, Lộc Thọ",
    city: "Nha Trang",
    phone: "0258 3900 168",
    type: "International",
  },
  {
    id: "nt3",
    name: "Bệnh viện Quân y 87",
    address: "78 Tuệ Tĩnh, Lộc Thọ",
    city: "Nha Trang",
    phone: "0258 3522 300",
    type: "Public",
  },
  {
    id: "nt4",
    name: "Bệnh viện 22-12",
    address: "34/4 Nguyễn Thiện Thuật",
    city: "Nha Trang",
    phone: "0258 3528 855",
    type: "Private",
  },
  {
    id: "nt5",
    name: "Bệnh viện Đa khoa Tâm Trí Nha Trang",
    address: "57 Cao Thắng, Phước Long",
    city: "Nha Trang",
    phone: "0258 3887 599",
    type: "Private",
  },
  {
    id: "nt6",
    name: "Bệnh viện Đa khoa Sài Gòn - Nha Trang",
    address: "10 đường 19/5, Vĩnh Điềm Trung",
    city: "Nha Trang",
    phone: "0258 3898 789",
    type: "Private",
  },
  {
    id: "nt7",
    name: "Bệnh viện Mắt Sài Gòn - Nha Trang",
    address: "9-24 KDC Cầu Dứa, Vĩnh Hiệp",
    city: "Nha Trang",
    phone: "0258 3895 039",
    type: "Private",
  },
  {
    id: "nt8",
    name: "Bệnh viện Lao và Bệnh phổi Khánh Hòa",
    address: "Núi Sạn, Vĩnh Hải",
    city: "Nha Trang",
    phone: "0258 3831 289",
    type: "Public",
  },
  {
    id: "nt9",
    name: "Bệnh viện Da liễu Khánh Hòa",
    address: "229 Nguyễn Khuyến, Vĩnh Hải",
    city: "Nha Trang",
    phone: "0258 3832 252",
    type: "Public",
  },
  {
    id: "nt10",
    name: "Bệnh viện Y học cổ truyền và PHCN Khánh Hòa",
    address: "Phạm Văn Đồng, Vĩnh Phước",
    city: "Nha Trang",
    phone: "0258 3831 103",
    type: "Public",
  },
  {
    id: "nt11",
    name: "Bệnh viện Bệnh Nhiệt đới Khánh Hòa",
    address: "23/10 Xã Vĩnh Thạnh",
    city: "Nha Trang",
    phone: "0258 3895 444",
    type: "Public",
  },
  {
    id: "nt12",
    name: "Bệnh viện Ung bướu Khánh Hòa",
    address: "Nguyễn Khuyến, Vĩnh Hải",
    city: "Nha Trang",
    phone: "0258 3836 789",
    type: "Public",
  },
  {
    id: "nt13",
    name: "Trung tâm Y tế TP. Nha Trang",
    address: "13 Lê Lợi, Xương Huân",
    city: "Nha Trang",
    phone: "0258 3822 267",
    type: "Public",
  },
  {
    id: "nt14",
    name: "Phòng khám Đa khoa Tín Đức",
    address: "69 Trần Quý Cáp",
    city: "Nha Trang",
    phone: "0258 3813 777",
    type: "Private",
  },
  {
    id: "nt15",
    name: "Phòng khám Đa khoa Medic Nha Trang",
    address: "1308 Đường 2/4",
    city: "Nha Trang",
    phone: "0258 3819 115",
    type: "Private",
  },

  // --- Huế ---
  {
    id: "hue1",
    name: "Bệnh viện Trung ương Huế",
    address: "16 Lê Lợi, Vĩnh Ninh",
    city: "Hue",
    phone: "0234 3822 325",
    type: "Public",
  },
  {
    id: "hue2",
    name: "Bệnh viện Quốc tế Trung ương Huế",
    address: "03 Ngô Quyền, Vĩnh Ninh",
    city: "Hue",
    phone: "0234 3890 888",
    type: "International",
  },
  {
    id: "hue3",
    name: "Bệnh viện Trường Đại học Y Dược Huế",
    address: "41 Nguyễn Huệ, Vĩnh Ninh",
    city: "Hue",
    phone: "0234 3847 146",
    type: "Public",
  },
  {
    id: "hue4",
    name: "Bệnh viện Đa khoa Hoàng Viết Thắng",
    address: "187 Điện Biên Phủ, Trường An",
    city: "Hue",
    phone: "0234 3899 999",
    type: "Private",
  },
  {
    id: "hue5",
    name: "Bệnh viện Mắt Huế",
    address: "Khu quy hoạch 7, Vỹ Dạ",
    city: "Hue",
    phone: "0234 3935 311",
    type: "Public",
  },
  {
    id: "hue6",
    name: "Bệnh viện Chấn thương Chỉnh hình - PTTH Huế",
    address: "Phạm Văn Đồng, Vỹ Dạ",
    city: "Hue",
    phone: "0234 3896 896",
    type: "Public",
  },
  {
    id: "hue7",
    name: "Bệnh viện Giao thông Vận tải Huế",
    address: "17 Bùi Thị Xuân, Đúc",
    city: "Hue",
    phone: "0234 3823 888",
    type: "Public",
  },
  {
    id: "hue8",
    name: "Bệnh viện Quân y 268",
    address: "Mang Cá, Thuận Lộc",
    city: "Hue",
    phone: "0234 3522 153",
    type: "Public",
  },
  {
    id: "hue9",
    name: "Bệnh viện Đa khoa Thành phố Huế",
    address: "40 Kim Long, Kim Long",
    city: "Hue",
    phone: "0234 3522 253",
    type: "Public",
  },
  {
    id: "hue10",
    name: "Bệnh viện Y học cổ truyền Thừa Thiên Huế",
    address: "322 Nguyễn Trãi, Tây Lộc",
    city: "Hue",
    phone: "0234 3523 056",
    type: "Public",
  },
  {
    id: "hue11",
    name: "Bệnh viện Phổi Thừa Thiên Huế",
    address: "Ngũ Tây, Thủy An",
    city: "Hue",
    phone: "0234 3885 244",
    type: "Public",
  },
  {
    id: "hue12",
    name: "Bệnh viện Tâm thần Huế",
    address: "39 Phạm Thị Liên, Kim Long",
    city: "Hue",
    phone: "0234 3522 711",
    type: "Public",
  },
  {
    id: "hue13",
    name: "Trung tâm Y tế Huyện Phú Vang",
    address: "Thị trấn Phú Đa, Phú Vang",
    city: "Hue",
    phone: "0234 3855 247",
    type: "Public",
  },
  {
    id: "hue14",
    name: "Trung tâm Y tế Thị xã Hương Thủy",
    address: "1165 Nguyễn Tất Thành, Phú Bài",
    city: "Hue",
    phone: "0234 3861 247",
    type: "Public",
  },
  {
    id: "hue15",
    name: "Phòng khám Đa khoa Âu Lạc",
    address: "150 An Dương Vương, An Cựu",
    city: "Hue",
    phone: "0234 3833 533",
    type: "Private",
  },

  // --- Vũng Tàu ---
  {
    id: "vt1",
    name: "Bệnh viện Vũng Tàu (Bệnh viện Lê Lợi cũ)",
    address: "27 Đường 2/9, Phường 11",
    city: "Vung Tau",
    phone: "0254 3832 667",
    type: "Public",
  },
  {
    id: "vt2",
    name: "Bệnh viện Bà Rịa",
    address: "686 Võ Văn Kiệt, Long Tâm",
    city: "Vung Tau",
    phone: "0254 3731 187",
    type: "Public",
  },
  {
    id: "vt3",
    name: "Bệnh viện Mắt tỉnh Bà Rịa - Vũng Tàu",
    address: "21 Phạm Ngọc Thạch, Phước Hưng, Bà Rịa",
    city: "Vung Tau",
    phone: "0254 3732 718",
    type: "Public",
  },
  {
    id: "vt4",
    name: "Bệnh viện Phổi Phạm Hữu Chí",
    address: "Ấp Đồng Trung, Tam An, Long Đất",
    city: "Vung Tau",
    phone: "0254 3732 939",
    type: "Public",
  },
  {
    id: "vt5",
    name: "Bệnh viện Tâm thần Bà Rịa - Vũng Tàu",
    address: "Xã Bình Ba, Châu Đức",
    city: "Vung Tau",
    phone: "0254 3962 331",
    type: "Public",
  },
  {
    id: "vt6",
    name: "Trung tâm Y tế Vietsovpetro",
    address: "2 Pasteur, Phường 7",
    city: "Vung Tau",
    phone: "0254 3839 871",
    type: "Public",
  },
  {
    id: "vt7",
    name: "Trung tâm Y tế Thành phố Vũng Tàu",
    address: "276 Lê Lợi, Phường 7",
    city: "Vung Tau",
    phone: "0254 3832 258",
    type: "Public",
  },
  {
    id: "vt8",
    name: "Trung tâm Y tế Huyện Long Điền",
    address: "Thị trấn Long Hải, Long Điền",
    city: "Vung Tau",
    phone: "0254 3862 138",
    type: "Public",
  },
  {
    id: "vt9",
    name: "Trung tâm Y tế Huyện Xuyên Mộc",
    address: "Quốc lộ 55, Xuyên Mộc",
    city: "Vung Tau",
    phone: "0254 3874 153",
    type: "Public",
  },
  {
    id: "vt10",
    name: "Phòng khám Đa khoa Quốc tế Vũng Tàu",
    address: "205A Lê Hồng Phong, Phường 8",
    city: "Vung Tau",
    phone: "0923 087 119",
    type: "Private",
  },

  // --- Đà Lạt ---
  {
    id: "dl1",
    name: "Bệnh viện Đa khoa tỉnh Lâm Đồng",
    address: "4 Phạm Ngọc Thạch, Đà Lạt",
    city: "Da Lat",
    phone: "0263 3821 235",
    type: "Public",
  },
  {
    id: "dl2",
    name: "Bệnh viện Hoàn Mỹ Đà Lạt",
    address: "Đồi Long Thọ, Phường 10",
    city: "Da Lat",
    phone: "0263 3510 878",
    type: "Private",
  },
  {
    id: "dl3",
    name: "Bệnh viện Nhi Lâm Đồng",
    address: "57 Thánh Mẫu, Phường 7",
    city: "Da Lat",
    phone: "0263 3822 550",
    type: "Public",
  },
  {
    id: "dl4",
    name: "Bệnh viện Y học cổ truyền Phạm Ngọc Thạch",
    address: "21 Quang Trung, Phường 9",
    city: "Da Lat",
    phone: "0263 3822 670",
    type: "Public",
  },
  {
    id: "dl5",
    name: "Bệnh viện Phục hồi chức năng Lâm Đồng",
    address: "35 Hùng Vương, Phường 9",
    city: "Da Lat",
    phone: "0263 3822 344",
    type: "Public",
  },
  {
    id: "dl6",
    name: "Trung tâm Y tế Đà Lạt",
    address: "9 Nguyễn Văn Cừ, Phường 1",
    city: "Da Lat",
    phone: "0263 3822 284",
    type: "Public",
  },
  {
    id: "dl7",
    name: "Bệnh viện Đa khoa Phương Nam",
    address: "8-10 Minh Mạng, Phường 10",
    city: "Da Lat",
    phone: "0263 3555 555",
    type: "Private",
  },
  {
    id: "dl8",
    name: "Bệnh viện Đa khoa II Lâm Đồng (Bảo Lộc)",
    address: "2 Đinh Tiên Hoàng, Bảo Lộc",
    city: "Da Lat",
    phone: "0263 3864 121",
    type: "Public",
  },
  {
    id: "dl9",
    name: "Trung tâm Y tế Huyện Đức Trọng",
    address: "Thị trấn Liên Nghĩa, Đức Trọng",
    city: "Da Lat",
    phone: "0263 3843 356",
    type: "Public",
  },
  {
    id: "dl10",
    name: "Phòng khám Đa khoa Sài Gòn - Đà Lạt",
    address: "37 Quang Trung, Phường 9",
    city: "Da Lat",
    phone: "0263 3525 252",
    type: "Private",
  },

  // --- Biên Hòa (Đồng Nai) ---
  {
    id: "bh1",
    name: "Bệnh viện Đa khoa Đồng Nai",
    address: "2 Đồng Khởi, Tam Hòa",
    city: "Bien Hoa",
    phone: "0251 8969 999",
    type: "Public",
  },
  {
    id: "bh2",
    name: "Bệnh viện Quốc tế Hoàn Mỹ Đồng Nai",
    address: "1048 Phạm Văn Thuận, Tân Mai",
    city: "Bien Hoa",
    phone: "0251 3840 840",
    type: "International",
  },
  {
    id: "bh3",
    name: "Bệnh viện Đa khoa Thống Nhất",
    address: "234 Quốc lộ 1A, Tân Biên",
    city: "Bien Hoa",
    phone: "0251 3883 660",
    type: "Public",
  },
  {
    id: "bh4",
    name: "Bệnh viện Nhi đồng Đồng Nai",
    address: "Xa lộ Hà Nội, Tân Hiệp",
    city: "Bien Hoa",
    phone: "0251 3891 483",
    type: "Public",
  },
  {
    id: "bh5",
    name: "Bệnh viện Phụ sản Âu Cơ",
    address: "47/19A Điểu Xiển, Tân Biên",
    city: "Bien Hoa",
    phone: "0251 3812 055",
    type: "Private",
  },
  {
    id: "bh6",
    name: "Bệnh viện Tâm thần Trung ương 2",
    address: "Nguyễn Ái Quốc, Tân Phong",
    city: "Bien Hoa",
    phone: "0251 3822 965",
    type: "Public",
  },
  {
    id: "bh7",
    name: "Bệnh viện Quân y 7B",
    address: "9 Nguyễn Ái Quốc, Tân Tiến",
    city: "Bien Hoa",
    phone: "0251 3823 824",
    type: "Public",
  },
  {
    id: "bh8",
    name: "Bệnh viện Đa khoa ITO Sài Gòn - Đồng Nai",
    address: "F99 Võ Thị Sáu, Thống Nhất",
    city: "Bien Hoa",
    phone: "0251 3918 569",
    type: "Private",
  },
  {
    id: "bh9",
    name: "Bệnh viện Đa khoa Tâm Hồng Phước",
    address: "148 Nguyễn Ái Quốc, Trảng Dài",
    city: "Bien Hoa",
    phone: "0251 3897 610",
    type: "Private",
  },
  {
    id: "bh10",
    name: "Bệnh viện Y Dược Cổ truyền Đồng Nai",
    address: "Đồng Khởi, Tân Phong",
    city: "Bien Hoa",
    phone: "0251 3822 839",
    type: "Public",
  },

  // --- Bình Dương ---
  {
    id: "bd1",
    name: "Bệnh viện Đa khoa tỉnh Bình Dương",
    address: "5 Phạm Ngọc Thạch, Hiệp Thành, Thủ Dầu Một",
    city: "Binh Duong",
    phone: "0274 3822 920",
    type: "Public",
  },
  {
    id: "bd2",
    name: "Bệnh viện Quốc tế Becamex",
    address: "Đại lộ Bình Dương, Lái Thiêu, Thuận An",
    city: "Binh Duong",
    phone: "0274 3681 681",
    type: "International",
  },
  {
    id: "bd3",
    name: "Bệnh viện Quốc tế Hạnh Phúc",
    address: "18 Đại lộ Bình Dương, Thuận An",
    city: "Binh Duong",
    phone: "1900 6765",
    type: "International",
  },
  {
    id: "bd4",
    name: "Bệnh viện Quốc tế Columbia Asia",
    address: "Đường 22/12, Thuận Giao, Thuận An",
    city: "Binh Duong",
    phone: "0274 3819 933",
    type: "International",
  },
  {
    id: "bd5",
    name: "Bệnh viện Đa khoa Vạn Phúc 1",
    address: "45 Hồ Văn Cống, Tương Bình Hiệp, Thủ Dầu Một",
    city: "Binh Duong",
    phone: "0274 3777 999",
    type: "Private",
  },
  {
    id: "bd6",
    name: "Bệnh viện Đa khoa Mỹ Phước",
    address: "TC3, Thới Hòa, Bến Cát",
    city: "Binh Duong",
    phone: "0274 3535 777",
    type: "Private",
  },
  {
    id: "bd7",
    name: "Bệnh viện Quân y 4 (Quân đoàn 4)",
    address: "Độc Lập, Dĩ An",
    city: "Binh Duong",
    phone: "0274 3742 222",
    type: "Public",
  },
  {
    id: "bd8",
    name: "Bệnh viện Y học cổ truyền Bình Dương",
    address: "Yersin, Phú Cường, Thủ Dầu Một",
    city: "Binh Duong",
    phone: "0274 3822 305",
    type: "Public",
  },
  {
    id: "bd9",
    name: "Bệnh viện Phụ sản Nhi Bình Dương",
    address: "455 CMT8, Phú Cường, Thủ Dầu Một",
    city: "Binh Duong",
    phone: "0274 3859 581",
    type: "Public",
  },
  {
    id: "bd10",
    name: "Trung tâm Y tế TP. Dĩ An",
    address: "Đông Tác, Tân Đông Hiệp, Dĩ An",
    city: "Binh Duong",
    phone: "0274 3742 902",
    type: "Public",
  },

  // --- Long Xuyên (An Giang) ---
  {
    id: "lx1",
    name: "Bệnh viện Đa khoa trung tâm An Giang",
    address: "60 Ung Văn Khiêm, Mỹ Phước",
    city: "Long Xuyen",
    phone: "0296 3852 989",
    type: "Public",
  },
  {
    id: "lx2",
    name: "Bệnh viện Sản - Nhi An Giang",
    address: "02 Lê Lợi, Mỹ Bình",
    city: "Long Xuyen",
    phone: "0296 3852 862",
    type: "Public",
  },
  {
    id: "lx3",
    name: "Bệnh viện Tim mạch An Giang",
    address: "08 Nguyễn Du, Mỹ Bình",
    city: "Long Xuyen",
    phone: "0296 3955 755",
    type: "Public",
  },
  {
    id: "lx4",
    name: "Bệnh viện Đa khoa Hạnh Phúc",
    address: "234 Trần Hưng Đạo, Mỹ Thới",
    city: "Long Xuyen",
    phone: "0296 3857 429",
    type: "Private",
  },
  {
    id: "lx5",
    name: "Bệnh viện Đa khoa Nhật Tân",
    address: "Châu Long 8, Châu Phú B, Châu Đốc (Tỉnh AG)",
    city: "Long Xuyen",
    phone: "0296 3562 226",
    type: "Private",
  },

  // --- Rạch Giá (Kiên Giang) ---
  {
    id: "rg1",
    name: "Bệnh viện Đa khoa tỉnh Kiên Giang",
    address: "46 Lê Lợi, Vĩnh Thanh Vân",
    city: "Rach Gia",
    phone: "0297 3863 328",
    type: "Public",
  },
  {
    id: "rg2",
    name: "Bệnh viện Sản Nhi Kiên Giang",
    address: "Số 5 Đường 3/2, An Hòa",
    city: "Rach Gia",
    phone: "0297 3911 222",
    type: "Public",
  },
  {
    id: "rg3",
    name: "Bệnh viện Đa khoa Bình An",
    address: "80 Nguyễn Trung Trực, Vĩnh Bảo",
    city: "Rach Gia",
    phone: "0297 3949 949",
    type: "Private",
  },
  {
    id: "rg4",
    name: "Bệnh viện Y học cổ truyền Kiên Giang",
    address: "64 Đống Đa, Vĩnh Lạc",
    city: "Rach Gia",
    phone: "0297 3862 612",
    type: "Public",
  },
  {
    id: "rg5",
    name: "Bệnh viện Lao và Bệnh phổi Kiên Giang",
    address: "15 Nam Kỳ Khởi Nghĩa, An Hòa",
    city: "Rach Gia",
    phone: "0297 3811 888",
    type: "Public",
  },

  // --- Cà Mau ---
  {
    id: "cm1",
    name: "Bệnh viện Đa khoa tỉnh Cà Mau",
    address: "16 Hải Thượng Lãn Ông, Phường 6",
    city: "Ca Mau",
    phone: "0290 3831 015",
    type: "Public",
  },
  {
    id: "cm2",
    name: "Bệnh viện Sản - Nhi Cà Mau",
    address: "85 Lý Thường Kiệt, Phường 6",
    city: "Ca Mau",
    phone: "0290 3567 610",
    type: "Public",
  },
  {
    id: "cm3",
    name: "Bệnh viện Đa khoa Hoàn Mỹ Minh Hải",
    address: "9 Lạc Long Quân, Phường 7",
    city: "Ca Mau",
    phone: "0290 3575 859",
    type: "Private",
  },
  {
    id: "cm4",
    name: "Bệnh viện Medic Cà Mau",
    address: "320 Trần Hưng Đạo, Tân Thành",
    city: "Ca Mau",
    phone: "0290 3826 060",
    type: "Private",
  },
  {
    id: "cm5",
    name: "Bệnh viện Điều dưỡng và PHCN Cà Mau",
    address: "6 Lý Văn Lâm, Phường 1",
    city: "Ca Mau",
    phone: "0290 3676 060",
    type: "Public",
  },
];
