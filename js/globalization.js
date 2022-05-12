$.i18n.init(
  {
    lng: 'en-US',
    debug: true,
    useLocalStorage: false,
    localStorageExpirationTime: 86400000,
    resStore: {
      'en-US': {
        // 네비게이션
        NAV: {
          BROWSER: 'Browser',
          SERVICE: 'Service',
          ADVANTAGE: 'Advantage',
          HOW_IT_WORKS: 'How it works',
          GETTING_STARTED: 'Getting Started',
          CREATING_ACCOUNT: 'Creating Account',
          SETTING_STORAGES: 'Setting Storages',
          MANAGING_DATA: 'Managing Data',
          FAQ: 'FAQ',
          SIGN_IN: 'Sign in',
          SETTINGS: 'Settings',
          PERSONAL_INFO: 'Personal Info',
          STORAGE_MANAGEMENT: 'Storage Management',
          SIGN_OUT: 'Sign Out',
        },
        // Service
        SERVICE: {
          SLOGAN_1: 'Expand Your Storage',
          SLOGAN_2: 'Expand Your',
          SUB_SLOGAN_1: 'Expand Your Storage Expand Your Storage',
          SUB_SLOGAN_2: 'Expand Your Storage Expand Your',
          LEARN_MORE: 'Learn more',
          // Advantage
          ADVANTAGE_TITLE_1: 'Expand Your Storage',
          ADVANTAGE_DETAIL_1: 'Expand Your Storage Expand Your Storage Expand Your Storage Expand Your Sto Your Your Sto Your Sto Your Sto',
          ADVANTAGE_TITLE_2: 'Protect Your Data',
          ADVANTAGE_DETAIL_2: 'Expand Your Storage Expand Your Storag Expand Your Storage Expand Your Sto YourYour Sto Your Sto Your Sto',
          ADVANTAGE_TITLE_3: 'Own Sovereignty',
          ADVANTAGE_DETAIL_3: 'Expand Your Storage Expand Your Storag Expand Your Storage Expand Your Sto YourYour Sto Your Sto Your Sto',
          // How it works?
          HOW_IT_WORKS: 'How it works?',
          // Step 1
          STEP_1: 'STEP #1',
          STEP_1_TITLE: 'Objects are encrypted.',
          STEP_1_DETAIL: 'Floppie automatically encrypts every data before being uploaded.',
          STEP_1_QUESTION_1: 'Can Floppie see the stored data?',
          STEP_1_ANSWER_1:
            'No. Files are encrypted, split into pieces, and stored on geogra phically diverse Nodes, making data breaches a thing of the past.',
          STEP_1_QUESTION_2: 'What kind of encryption is applied?',
          STEP_1_ANSWER_2:
            'Every file is encrypted using AES-256-GCM symmetric encryption. This is standard on every file before being uploaded to our network to ensure no unauthorized user can access it.',
          // Step 2
          STEP_2: 'STEP #2',
          STEP_2_TITLE: 'Encrypted data are fragmented into small data pieces.',
          STEP_2_DETAIL: 'After being encrypted, each data file is fragmented into pieces that are indistinguishable from any other data’s fragment.',
          STEP_2_QUESTION_1: 'Why split up the files',
          STEP_2_ANSWER_1:
            'Splitting files yields unparalleled performance and durability. Our decentralized architecture offers improved out-of-the-box security and privacy for our customers and enables more reliable performance than traditional cloud storage providers.',
          // Step 3
          STEP_3: 'STEP #3',
          STEP_3_TITLE: 'Data fragments are distributed across the clouds',
          STEP_3_DETAIL: 'Data fragments, pieces of a uploaded data are individually stored over meta-cloud of multiple could storage.',
          STEP_3_QUESTION_1: 'Where are the data storage nodes?',
          STEP_3_ANSWER_1: 'Our global network is made up of thousands of Nodes. Currently, over 10k Nodes are being hosted in 84 countries.',
          // Step 4
          STEP_4: 'STEP #4',
          STEP_4_TITLE: 'Data is retrieved when you need.',
          STEP_4_DETAIL:
            'When you retrieve data, data fragment over the multiple cloud storage of yours will be downloaded and decrypted into a single data file.',
          STEP_4_QUESTION_1: 'What happens if a cloud storage goes down?',
          STEP_4_ANSWER_1:
            "One Node going offline won't impact any files. Our network's automatic repair process reacts when too many pieces for any files are lost, and repairs them within a very healthy margin of safety.",
        },
        // Browser
        BROWSER: {
          BROWSER: 'Browser',
          DASHBOARD: 'Dashboard',
          STORAGE: 'Storage',
          REMAINING: 'Remaining',
          CONNECTED_STORAGES: 'Connected Storages',
          MANAGE_VERSIONS: 'Manage versions',
          MAKE_A_COPY: 'Make a copy',
          REPORT_ABUSE: 'Report abuse',
          DOWNLOAD: 'Download',
          REMOVE: 'Remove',
        },
        // Getting Started
        GETTING_STARTED: {
          GETTING_STARTED: 'Getting Started',
          CREATING_ACCOUNT: 'Creating Account',
          CREATING_ACCOUNT_STEP_1: 'STEP 1',
          CREATING_ACCOUNT_STEP_1_TITLE: 'Creating account instruction sample1',
          CREATING_ACCOUNT_STEP_1_DETAIL_1: 'Expand Your Storage Expand Your Storage Expand Your Storage',
          CREATING_ACCOUNT_STEP_1_DETAIL_2: 'Expand Your Storage Expand Your Sto YourYour Sto',
          CREATING_ACCOUNT_STEP_1_DETAIL_3: 'Your Sto Your StoYour Sto Your Sto',
          CREATING_ACCOUNT_STEP_2: 'STEP 2',
          CREATING_ACCOUNT_STEP_2_TITLE: 'Creating account instruction sample2',
          CREATING_ACCOUNT_STEP_2_DETAIL_1: 'Expand Your Storage Expand Your Storage Expand Your Storage',
          CREATING_ACCOUNT_STEP_2_DETAIL_2: 'Expand Your Storage Expand Your Sto YourYour Sto',
          CREATING_ACCOUNT_STEP_2_DETAIL_3: 'Your Sto Your StoYour Sto Your Sto',
          SETTING_STORAGES: 'Setting Storages',
          SETTING_STORAGES_STEP_1: 'STEP 1',
          SETTING_STORAGES_STEP_1_TITLE: 'Setting storages instruction sample1',
          SETTING_STORAGES_STEP_1_DETAIL_1: 'Expand Your Storage Expand Your Storage Expand Your Storage',
          SETTING_STORAGES_STEP_1_DETAIL_2: 'Expand Your Storage Expand Your Sto YourYour Sto',
          SETTING_STORAGES_STEP_1_DETAIL_3: 'Your Sto Your StoYour Sto Your Sto',
          SETTING_STORAGES_STEP_2: 'STEP 2',
          SETTING_STORAGES_STEP_2_TITLE: 'Setting storages instruction sample2',
          SETTING_STORAGES_STEP_2_DETAIL_1: 'Expand Your Storage Expand Your Storage Expand Your Storage',
          SETTING_STORAGES_STEP_2_DETAIL_2: 'Expand Your Storage Expand Your Sto YourYour Sto',
          SETTING_STORAGES_STEP_2_DETAIL_3: 'Your Sto Your StoYour Sto Your Sto',
          MANAGING_DATA: 'Managing Data',
          MANAGING_DATA_STEP_1: 'STEP 1',
          MANAGING_DATA_STEP_1_TITLE: 'Managing data instruction sample1',
          MANAGING_DATA_STEP_1_DETAIL_1: 'Expand Your Storage Expand Your Storage Expand Your Storage',
          MANAGING_DATA_STEP_1_DETAIL_2: 'Expand Your Storage Expand Your Sto YourYour Sto',
          MANAGING_DATA_STEP_1_DETAIL_3: 'Your Sto Your StoYour Sto Your Sto',
          MANAGING_DATA_STEP_2: 'STEP 2',
          MANAGING_DATA_STEP_2_TITLE: 'Managing data instruction sample2',
          MANAGING_DATA_STEP_2_DETAIL_1: 'Expand Your Storage Expand Your Storage Expand Your Storage',
          MANAGING_DATA_STEP_2_DETAIL_2: 'Expand Your Storage Expand Your Sto YourYour Sto',
          MANAGING_DATA_STEP_2_DETAIL_3: 'Your Sto Your StoYour Sto Your Sto',
        },
        // FAQ
        FAQ: {
          FAQ: 'FAQ',
          QUESTION_1: 'Sample question 1?',
          ANSWER_1:
            'No. Files are encrypted, split into pieces, and stored on geogra ypted, split into pieces, and stored on ypted, split into pieces, and stored on ypted, split phically diverse Nodes, making data breaches a thing of the past.',
          QUESTION_2: 'Sample question 2?',
          ANSWER_2:
            'No. Files are encrypted, split into pieces, and stored on geogra ypted, split into pieces, and stored on ypted, split into pieces, and stored on ypted, split phically diverse Nodes, making data breaches a thing of the past.',
          QUESTION_3: 'Sample question 3?',
          ANSWER_3:
            'No. Files are encrypted, split into pieces, and stored on geogra ypted, split into pieces, and stored on ypted, split into pieces, and stored on ypted, split phically diverse Nodes, making data breaches a thing of the past.',
          QUESTION_4: 'Sample question 4?',
          ANSWER_4:
            'No. Files are encrypted, split into pieces, and stored on geogra ypted, split into pieces, and stored on ypted, split into pieces, and stored on ypted, split phically diverse Nodes, making data breaches a thing of the past.',
          QUESTION_5: 'Sample question 5?',
          ANSWER_5:
            'No. Files are encrypted, split into pieces, and stored on geogra ypted, split into pieces, and stored on ypted, split into pieces, and stored on ypted, split phically diverse Nodes, making data breaches a thing of the past.',
          QUESTION_6: 'Sample question 6?',
          ANSWER_6:
            'No. Files are encrypted, split into pieces, and stored on geogra ypted, split into pieces, and stored on ypted, split into pieces, and stored on ypted, split phically diverse Nodes, making data breaches a thing of the past.',
        },
        // USER
        USER: {
          // Personal Info
          PERSONAL_INFO: 'Personal Info',
          EDIT_INFO: 'Edit Info',
          SAVE_CHANGES: 'Save Changes',
          SIGN_UP: 'Sign Up',
          // PIN Reset
          PIN_RESET: 'PIN Reset',
          RESET_THE_PIN: 'Reset the PIN',
          // Storage management
          STORAGE_MANAGEMENT: 'Storage Management',
          CREATING_ACCOUNT: 'Creating Account',
          CONNECT_MORE: 'Connect More',
        },
        // Error messages
        ERROR_MSG: {
          ID_ERROR: '5~20 Characters Consisting Of Alphabet Or Numbers Impossible',
          PIN_CODE_ERROR: '4~8 Characters Consisting Of Numbers',
          RE_ENTER_PIN_ERROR: "PIN Codes don't match",
        },
        // 로그아웃 모달
        SIGN_OUT: {
          TITLE1: 'Are you',
          TITLE2: 'sure to sign out?',
          YES: 'Yes',
          NO: 'No',
        },
        // Terms of servie 모달
        TERMS: {
          TITLE: 'Terms of service',
          CONTENTS:
            'Terms of serviceTerms of serviceTerms of serviceTerms of serviceTerms oserviceTerms of serviceTerms of eTerms of serviceTerms of serviceTerms oferviceTerms of serviceTerms of service',
        },
        // Privacy policy 모달
        POLICY: {
          TITLE: 'Privacy policy',
          CONTENTS:
            'Privacy policyPrivacy policyPrivacy policyPrivacy policyPrivacy policyPrivacy policyPrivacy policyPrivacy policyPrivacy policyPrivacy policyPrivacy policyPrivacy policyPrivacy policyPrivacy policyPrivacy policy',
        },
      },
      'ko-KR': {
        // 네비게이션
        NAV: {
          BROWSER: '탐색기',
          SERVICE: '서비스소개',
          ADVANTAGE: 'Advantage',
          HOW_IT_WORKS: 'How it works',
          GETTING_STARTED: '시작하기',
          CREATING_ACCOUNT: 'Creating Account',
          SETTING_STORAGES: 'Setting Storages',
          MANAGING_DATA: 'Managing Data',
          FAQ: 'FAQ',
          SIGN_IN: '로그인',
          SETTINGS: '세팅',
          PERSONAL_INFO: 'Personal Info',
          STORAGE_MANAGEMENT: 'Storage Management',
          SIGN_OUT: '로그아웃',
        },
        // Service
        SERVICE: {
          SLOGAN_1: '스토리지 확장 스토리지',
          SLOGAN_2: '스토리지 확장',
          SUB_SLOGAN_1: '스토리지 확장 스토리지 확장 스토리지 확장',
          SUB_SLOGAN_2: '스토리지 확장 스토리지 확장',
          LEARN_MORE: 'Learn more',
          // Advantage
          ADVANTAGE_TITLE_1: '스토리지 확장',
          ADVANTAGE_DETAIL_1: '스토리지 확장 스토리지 확장 스토리지 확장 스토리지 확장 스토리지 확장 스토리지 확장 스토리지 확장 스토리지 확장',
          ADVANTAGE_TITLE_2: '데이터 보호',
          ADVANTAGE_DETAIL_2: '데이터 보호 데이터 보호 데이터 보호 데이터 보호 데이터 보호 데이터 보호 데이터 보호 데이터 보호 데이터 보호',
          ADVANTAGE_TITLE_3: '자신의 주권',
          ADVANTAGE_DETAIL_3: '자신의 주권 자신의 주권 자신의 주권 자신의 주권 자신의 주권 자신의 주권 자신의 주권 자신의 주권 자신의 주권',
          // How it works?
          HOW_IT_WORKS: '어떻게 작동합니까?',
          // Step 1
          STEP_1: 'STEP #1',
          STEP_1_TITLE: '개체가 암호화됩니다.',
          STEP_1_DETAIL: 'Floppie는 업로드되기 전에 모든 데이터를 자동으로 암호화합니다.',
          STEP_1_QUESTION_1: 'Floppie는 저장된 데이터를 볼 수 있습니까?',
          STEP_1_ANSWER_1: '아니요. 파일은 암호화되어 여러 조각으로 분할되고 지리적으로 다양한 노드에 저장되므로 데이터 침해가 과거의 일이 됩니다.',
          STEP_1_QUESTION_2: '어떤 종류의 암호화가 적용됩니까?',
          STEP_1_ANSWER_2:
            '모든 파일은 AES-256-GCM 대칭 암호화를 사용하여 암호화됩니다. 이는 승인되지 않은 사용자가 액세스할 수 없도록 하기 위해 당사 네트워크에 업로드되기 전에 모든 파일에 대한 표준입니다.',
          // Step 2
          STEP_2: 'STEP #2',
          STEP_2_TITLE: '암호화된 데이터는 작은 데이터 조각으로 조각화됩니다.',
          STEP_2_DETAIL: '암호화된 후 각 데이터 파일은 다른 데이터의 조각과 구별할 수 없는 조각으로 조각화됩니다.',
          STEP_2_QUESTION_1: '파일을 분할하는 이유',
          STEP_2_ANSWER_1:
            '파일을 분할하면 비할 데 없는 성능과 내구성을 얻을 수 있습니다. 당사의 분산형 아키텍처는 고객에게 향상된 기본 보안 및 개인 정보를 제공하고 기존 클라우드 스토리지 제공업체보다 더 안정적인 성능을 제공합니다.',
          // Step 3
          STEP_3: 'STEP #3',
          STEP_3_TITLE: '데이터 조각은 클라우드 전체에 분산됩니다.',
          STEP_3_DETAIL: '데이터 조각, 업로드된 데이터 조각이 개별적으로 저장됩니다. 다중 캔 스토리지의 메타 클라우드.',
          STEP_3_QUESTION_1: '데이터 스토리지 노드는 어디에 있습니까?',
          STEP_3_ANSWER_1: '우리의 글로벌 네트워크는 수천 개의 노드로 구성됩니다. 현재 84개국에서 10,000개 이상의 노드가 호스팅되고 있습니다.',
          // Step 4
          STEP_4: 'STEP #4',
          STEP_4_TITLE: '필요할 때 데이터를 검색합니다.',
          STEP_4_DETAIL: '데이터를 검색하면 여러 클라우드 저장소에 있는 데이터 조각이 다운로드되어 단일 데이터 파일로 해독됩니다.',
          STEP_4_QUESTION_1: '클라우드 스토리지가 다운되면 어떻게 됩니까?',
          STEP_4_ANSWER_1:
            '하나의 노드가 오프라인 상태가 되어도 파일에 영향을 주지 않습니다. 우리 네트워크의 자동 복구 프로세스는 파일에 비해 너무 많은 부분이 손실되었을 때 반응하여 매우 안전한 범위 내에서 복구합니다.',
        },
        // Browser
        BROWSER: {
          BROWSER: '탐색기',
          DASHBOARD: '대시보드',
          STORAGE: '스토리지',
          REMAINING: '남은',
          CONNECTED_STORAGES: '연결된 스토리지',
          MANAGE_VERSIONS: '버전관리',
          MAKE_A_COPY: '복사',
          REPORT_ABUSE: '남용 신고',
          DOWNLOAD: '다운로드',
          REMOVE: '삭제',
        },
        // Getting Started
        GETTING_STARTED: {
          GETTING_STARTED: '시작하기',
          CREATING_ACCOUNT: '계정 생성',
          CREATING_ACCOUNT_STEP_1: 'STEP 1',
          CREATING_ACCOUNT_STEP_1_TITLE: '계정 생성 샘플1',
          CREATING_ACCOUNT_STEP_1_DETAIL_1: '스토리지 확장 스토리지 확장 스토리지 확장 스토리지 확장 스토리지 ',
          CREATING_ACCOUNT_STEP_1_DETAIL_2: '스토리지 확장 스토리지 확장 스토리지 확장 스토리지',
          CREATING_ACCOUNT_STEP_1_DETAIL_3: '스토리지 확장 스토리지 확장 스토리지 확장',
          CREATING_ACCOUNT_STEP_2: 'STEP 2',
          CREATING_ACCOUNT_STEP_2_TITLE: '계정 생성 샘플2',
          CREATING_ACCOUNT_STEP_2_DETAIL_1: '스토리지 확장 스토리지 확장 스토리지 확장 스토리지 확장 스토리지 ',
          CREATING_ACCOUNT_STEP_2_DETAIL_2: '스토리지 확장 스토리지 확장 스토리지 확장 스토리지',
          CREATING_ACCOUNT_STEP_2_DETAIL_3: '스토리지 확장 스토리지 확장 스토리지 확장',
          SETTING_STORAGES: '스토리지 설정',
          SETTING_STORAGES_STEP_1: 'STEP 1',
          SETTING_STORAGES_STEP_1_TITLE: '스토리지 설정 샘플1',
          SETTING_STORAGES_STEP_1_DETAIL_1: '스토리지 확장 스토리지 확장 스토리지 확장 스토리지 확장 스토리지 ',
          SETTING_STORAGES_STEP_1_DETAIL_2: '스토리지 확장 스토리지 확장 스토리지 확장 스토리지',
          SETTING_STORAGES_STEP_1_DETAIL_3: '스토리지 확장 스토리지 확장 스토리지 확장',
          SETTING_STORAGES_STEP_2: 'STEP 2',
          SETTING_STORAGES_STEP_2_TITLE: '스토리지 설정 샘플2',
          SETTING_STORAGES_STEP_2_DETAIL_1: '스토리지 확장 스토리지 확장 스토리지 확장 스토리지 확장 스토리지 ',
          SETTING_STORAGES_STEP_2_DETAIL_2: '스토리지 확장 스토리지 확장 스토리지 확장 스토리지',
          SETTING_STORAGES_STEP_2_DETAIL_3: '스토리지 확장 스토리지 확장 스토리지 확장',
          MANAGING_DATA: '데이터 관리',
          MANAGING_DATA_STEP_1: 'STEP 1',
          MANAGING_DATA_STEP_1_TITLE: '데이터 관리 샘플1',
          MANAGING_DATA_STEP_1_DETAIL_1: '스토리지 확장 스토리지 확장 스토리지 확장 스토리지 확장 스토리지 ',
          MANAGING_DATA_STEP_1_DETAIL_2: '스토리지 확장 스토리지 확장 스토리지 확장 스토리지',
          MANAGING_DATA_STEP_1_DETAIL_3: '스토리지 확장 스토리지 확장 스토리지 확장',
          MANAGING_DATA_STEP_2: 'STEP 2',
          MANAGING_DATA_STEP_2_TITLE: '데이터 관리 샘플2',
          MANAGING_DATA_STEP_2_DETAIL_1: '스토리지 확장 스토리지 확장 스토리지 확장 스토리지 확장 스토리지 ',
          MANAGING_DATA_STEP_2_DETAIL_2: '스토리지 확장 스토리지 확장 스토리지 확장 스토리지',
          MANAGING_DATA_STEP_2_DETAIL_3: '스토리지 확장 스토리지 확장 스토리지 확장',
        },
        // FAQ
        FAQ: {
          FAQ: 'FAQ',
          QUESTION_1: '샘플 질문 1?',
          A1: '아니요. 파일은 암호화되고, 조각으로 분할되고, 지리학적으로 저장되고, 조각으로 분할되고, ypted에 저장되고, 조각으로 분할되고, ypted, 분할된 물리적으로 다양한 노드에 저장되므로 데이터 침해가 과거의 일이 됩니다.',
          QUESTION_2: '샘플 질문 2?',
          A2: '아니요. 파일은 암호화되고, 조각으로 분할되고, 지리학적으로 저장되고, 조각으로 분할되고, ypted에 저장되고, 조각으로 분할되고, ypted, 분할된 물리적으로 다양한 노드에 저장되므로 데이터 침해가 과거의 일이 됩니다.',
          QUESTION_3: '샘플 질문 3?',
          A3: '아니요. 파일은 암호화되고, 조각으로 분할되고, 지리학적으로 저장되고, 조각으로 분할되고, ypted에 저장되고, 조각으로 분할되고, ypted, 분할된 물리적으로 다양한 노드에 저장되므로 데이터 침해가 과거의 일이 됩니다.',
          QUESTION_4: '샘플 질문 4?',
          A4: '아니요. 파일은 암호화되고, 조각으로 분할되고, 지리학적으로 저장되고, 조각으로 분할되고, ypted에 저장되고, 조각으로 분할되고, ypted, 분할된 물리적으로 다양한 노드에 저장되므로 데이터 침해가 과거의 일이 됩니다.',
          QUESTION_5: '샘플 질문 5?',
          A5: '아니요. 파일은 암호화되고, 조각으로 분할되고, 지리학적으로 저장되고, 조각으로 분할되고, ypted에 저장되고, 조각으로 분할되고, ypted, 분할된 물리적으로 다양한 노드에 저장되므로 데이터 침해가 과거의 일이 됩니다.',
          QUESTION_6: '샘플 질문 6?',
          A6: '아니요. 파일은 암호화되고, 조각으로 분할되고, 지리학적으로 저장되고, 조각으로 분할되고, ypted에 저장되고, 조각으로 분할되고, ypted, 분할된 물리적으로 다양한 노드에 저장되므로 데이터 침해가 과거의 일이 됩니다.',
        },
        // User
        USER: {
          // Personal Info
          PERSONAL_INFO: '개인 정보',
          EDIT_INFO: '정보 수정',
          SAVE_CHANGES: '변경 사항 저장',
          SIGN_UP: '회원가입',
          // PIN Reset
          PIN_RESET: 'PIN 재설정',
          RESET_THE_PIN: 'PIN 재설정',
          // Storage management
          STORAGE_MANAGEMENT: '스토리지 관리',
          CREATING_ACCOUNT: '계정 생성',
          CONNECT_MORE: '더 연결하기',
        },
        // Error messages
        ERROR_MSG: {
          ID_ERROR: '알파벳 또는 숫자로 구성된 5~20자 불가능',
          PIN_CODE_ERROR: '숫자로 구성된 4~8자로 입력해주세요',
          RE_ENTER_PIN_ERROR: 'PIN 코드가 일치하지 않습니다',
        },
        // 로그아웃 모달
        SIGN_OUT: {
          HEAD_TXT1: '정말로',
          HEAD_TXT2: '로그아웃 하시겠습니까?',
          YES: '네',
          NO: '아니오',
        },
        // Terms of servie 모달
        TERMS: {
          TITLE: 'Terms of service',
          CONTENTS:
            'Terms of serviceTerms of serviceTerms of serviceTerms of serviceTerms oserviceTerms of serviceTerms of eTerms of serviceTerms of serviceTerms oferviceTerms of serviceTerms of service',
        },
        // Privacy policy 모달
        POLICY: {
          TITLE: 'Privacy policy',
          CONTENTS:
            'Privacy policyPrivacy policyPrivacy policyPrivacy policyPrivacy policyPrivacy policyPrivacy policyPrivacy policyPrivacy policyPrivacy policyPrivacy policyPrivacy policyPrivacy policyPrivacy policyPrivacy policy',
        },
      },
    },
  },
  function () {
    $('body').i18n();
  },
);

var changeLang = function (lang) {
  $.i18n.setLng(lang);
  $('body').i18n();
};
